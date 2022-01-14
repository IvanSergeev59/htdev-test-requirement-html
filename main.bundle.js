/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\n\nconst changeSliderItem = (elem1Name, class1Name, elem2Name, class2Name, dots) => {\n  let i = 0;\n  const elements = document.getElementsByClassName(elem1Name);\n  const elements_2 = document.getElementsByClassName(elem2Name);\n  const isElements_2 = elements_2.length > 0;\n  dots ? document.getElementsByClassName(dots)[0].addEventListener('click', event => onClickChangeElements(event)) : null; // hide prev pictures and button\n\n  function hiddenOldPicDots(index) {\n    elements[index].classList.add(class1Name);\n    isElements_2 ? elements_2[index].classList.remove(class2Name) : null;\n  } //show next pictures and button\n\n\n  function showNewPicDots(index) {\n    elements[index].classList.remove(class1Name);\n    isElements_2 ? elements_2[index].classList.add(class2Name) : null;\n  } // click on dots\n\n\n  function onClickChangeElements(event) {\n    if (event.target.id > 0) {\n      hiddenOldPicDots(i);\n      i = Number(event.target.id) - 1;\n      showNewPicDots(i);\n    }\n  } // changing pics and dots. Check last pict and dot\n\n\n  function changeElements() {\n    if (i >= elements.length - 1) {\n      hiddenOldPicDots(i);\n      i = 0;\n      showNewPicDots(i);\n    } else {\n      hiddenOldPicDots(i);\n      showNewPicDots(i + 1);\n      i++;\n    }\n\n    ;\n  }\n\n  ;\n\n  function changeElementsBack() {\n    if (i < 1) {\n      hiddenOldPicDots(i);\n      i = elements.length - 1;\n      showNewPicDots(i);\n    } else {\n      hiddenOldPicDots(i);\n      showNewPicDots(i - 1);\n      i--;\n    }\n\n    ;\n  }\n\n  let initialPoint = '';\n  let finalPoint = '';\n  document.addEventListener('touchstart', function (event) {\n    event.stopPropagation();\n    initialPoint = event.changedTouches[0];\n  }, false);\n  document.addEventListener('touchend', function (event) {\n    finalPoint = event.changedTouches[0];\n    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);\n    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);\n\n    if ((xAbs > 20 || yAbs > 20) && event.target.classList.contains(elem1Name)) {\n      if (xAbs > yAbs) {\n        if (finalPoint.pageX < initialPoint.pageX) {\n          changeElements();\n        } else {\n          changeElementsBack();\n        }\n      }\n    }\n  }, false);\n  setInterval(() => changeElements(), 5000);\n};\n\nchangeSliderItem('our-projects__slider_picture', 'slide-hidden');\nchangeSliderItem('main-principles__main-block', 'text-hidden', 'main-principles__main-block_dots-image', 'choosen', 'main-principles__main-block_dots');\nchangeSliderItem('company-offer__main-block_image', 'company-image-hidden', 'company-offer__main-block_dots-image', 'choosen-white', 'company-offer__main-block_dots');\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/Layer 2.jpg */ \"./src/images/Layer 2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/Layer_2_mobile.jpg */ \"./src/images/Layer_2_mobile.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_1.jpg */ \"./src/images/slider_1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_2.png */ \"./src/images/slider_2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_3.png */ \"./src/images/slider_3.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_4.png */ \"./src/images/slider_4.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_5.png */ \"./src/images/slider_5.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_6.png */ \"./src/images/slider_6.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_7.png */ \"./src/images/slider_7.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_8.png */ \"./src/images/slider_8.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/slider_9.png */ \"./src/images/slider_9.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/arrows.png */ \"./src/images/arrows.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/layer 21.jpg */ \"./src/images/layer 21.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/inteco-now_mobile.jpg */ \"./src/images/inteco-now_mobile.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/divider.jpg */ \"./src/images/divider.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/divider_mobile.jpg */ \"./src/images/divider_mobile.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/eclipse.jpg */ \"./src/images/eclipse.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/eclipse_choosen.jpg */ \"./src/images/eclipse_choosen.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_1.jpg */ \"./src/images/company_offer_1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_2.jpg */ \"./src/images/company_offer_2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_3.jpg */ \"./src/images/company_offer_3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_4.jpg */ \"./src/images/company_offer_4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_5.jpg */ \"./src/images/company_offer_5.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_6.jpg */ \"./src/images/company_offer_6.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_7.jpg */ \"./src/images/company_offer_7.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_8.jpg */ \"./src/images/company_offer_8.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_9.jpg */ \"./src/images/company_offer_9.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_10.jpg */ \"./src/images/company_offer_10.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/company_offer_11.jpg */ \"./src/images/company_offer_11.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/ecpilse_white.png */ \"./src/images/ecpilse_white.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/ecpilse_white_choosen.png */ \"./src/images/ecpilse_white_choosen.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/Rectangle_5.jpg */ \"./src/images/Rectangle_5.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/images/horizontal_line.jpg */ \"./src/images/horizontal_line.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);\nvar ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);\nvar ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);\nvar ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n.header__logo {\\n  height: 40px;\\n  width: 150px;\\n  margin-left: 60px;\\n  margin-top: 38px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .header__logo {\\n    height: 40px;\\n    width: 150px;\\n    margin-left: 20px;\\n    margin-top: 20px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .header__logo {\\n    height: 40px;\\n    width: 150px;\\n    margin-left: 10px;\\n    margin-top: 10px; } }\\n\\n@media (max-width: 699px) {\\n  .header__logo {\\n    height: 30px;\\n    width: 106px;\\n    margin-left: 6.5%;\\n    margin-top: 23px; } }\\n\\n.header__lang-link {\\n  height: 20px;\\n  width: 20px;\\n  margin-top: 48px;\\n  margin-left: 957px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .header__lang-link {\\n    height: 20px;\\n    width: 20px;\\n    margin-top: 25px;\\n    margin-left: 700px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .header__lang-link {\\n    height: 20px;\\n    width: 20px;\\n    margin-top: 20px;\\n    margin-left: 420px; } }\\n\\n@media (max-width: 699px) {\\n  .header__lang-link {\\n    display: none; } }\\n\\nheader {\\n  width: 100%;\\n  height: 120px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  header {\\n    width: 100%;\\n    height: 80px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  header {\\n    width: 100%;\\n    height: 70px; } }\\n\\n@media (max-width: 699px) {\\n  header {\\n    width: 100%;\\n    height: 82px;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex; } }\\n\\n.we-are__left-block {\\n  width: 550px;\\n  background-color: white;\\n  margin-top: 65px;\\n  margin-bottom: 65px;\\n  z-index: 2; }\\n\\nh2 {\\n  color: #4764b0;\\n  font-size: 32px;\\n  line-height: 18px;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  margin-left: 60px;\\n  margin-top: 55px;\\n  margin-bottom: 26px; }\\n\\np {\\n  color: black;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 16px;\\n  margin-left: 58px;\\n  margin-bottom: 10px;\\n  margin-top: 0px;\\n  width: 460px;\\n  line-height: 24px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .we-are__left-block {\\n    width: 50%;\\n    margin-top: 30px;\\n    margin-bottom: 30px;\\n    z-index: 2; }\\n  h2 {\\n    font-size: 26px;\\n    line-height: 16px;\\n    margin-left: 20px;\\n    margin-top: 20px;\\n    margin-bottom: 26px; }\\n  p {\\n    font-family: Arial, Helvetica, sans-serif;\\n    font-size: 13px;\\n    margin-left: 20px;\\n    margin-bottom: 10px;\\n    margin-top: 0px;\\n    width: 460px;\\n    line-height: 20px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .we-are__left-block {\\n    width: 55%;\\n    margin-top: 30px;\\n    margin-bottom: 10px;\\n    z-index: 2; }\\n  h2 {\\n    font-size: 18px;\\n    line-height: 20px;\\n    margin-left: 10px;\\n    margin-top: 10px;\\n    margin-bottom: 10px; }\\n  p {\\n    font-size: 12px;\\n    margin-left: 10px;\\n    margin-bottom: 10px;\\n    margin-top: 0px;\\n    width: 90%;\\n    line-height: 18px; } }\\n\\n@media (max-width: 699px) {\\n  .we-are__left-block {\\n    width: 93.33%;\\n    margin-top: -38px;\\n    margin-bottom: 0px;\\n    padding-bottom: 30px; }\\n  h2 {\\n    font-size: 24px;\\n    line-height: 28px;\\n    margin-left: 7.14%;\\n    margin-top: 33px;\\n    margin-bottom: 14px; }\\n  p {\\n    font-family: Arial;\\n    font-size: 12px;\\n    margin-right: 0px;\\n    margin-left: 7.2%;\\n    margin-bottom: 8px;\\n    margin-top: 2px;\\n    width: 87.81%;\\n    line-height: 18px; } }\\n\\n.we-are__right-block {\\n  width: 920px;\\n  height: 570px;\\n  background-size: contain;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  margin-left: -220px;\\n  z-index: 1; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .we-are__right-block {\\n    width: 60%;\\n    height: auto;\\n    background-size: cover;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    margin-left: -10%; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .we-are__right-block {\\n    width: 65%;\\n    height: auto;\\n    background-size: contain;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    margin-left: -15%; } }\\n\\n@media (max-width: 699px) {\\n  .we-are__right-block {\\n    width: 93.33%;\\n    height: auto;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-repeat: no-repeat;\\n    margin: 0px;\\n    margin-left: 6.67%; }\\n  .we-are__right-block:before {\\n    content: \\\"\\\";\\n    display: block;\\n    padding-top: 62.14%; } }\\n\\n.we-are {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  width: 100%; }\\n\\n@media (max-width: 699px) {\\n  .we-are {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: reverse;\\n        -ms-flex-direction: column-reverse;\\n            flex-direction: column-reverse; } }\\n\\n.our-projects__heading {\\n  width: 57.6%;\\n  margin-left: 330px;\\n  margin-top: 95px; }\\n\\n.our-projects__heading h2 {\\n  margin: 0px;\\n  font-size: 32px;\\n  line-height: 38px;\\n  color: #4764b0; }\\n\\n.our-projects__heading p {\\n  margin: 0px;\\n  font-size: 16px;\\n  line-height: 24px;\\n  margin-top: 15px;\\n  width: 100%;\\n  margin-left: -2px; }\\n\\n.our-projects__heading:last-of-type {\\n  margin-left: 26.4%;\\n  margin-top: 36px;\\n  margin-bottom: 90px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .our-projects__heading {\\n    width: 45% 0.6%;\\n    margin-left: 370px;\\n    margin-top: 40px; }\\n  .our-projects__heading h2 {\\n    font-size: 26px;\\n    line-height: 16px; }\\n  .our-projects__heading p {\\n    font-size: 13px;\\n    line-height: 20px;\\n    margin-top: 15px;\\n    width: 100%;\\n    margin-left: 0px; }\\n  .our-projects__heading:last-of-type {\\n    margin-left: 370px;\\n    margin-top: 25px;\\n    margin-bottom: 40px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .our-projects__heading {\\n    width: 45.6%;\\n    margin-left: 260px;\\n    margin-top: 20px; }\\n  .our-projects__heading h2 {\\n    font-size: 18px;\\n    line-height: 18px; }\\n  .our-projects__heading p {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-top: 10px; }\\n  .our-projects__heading:last-of-type {\\n    margin-left: 260px;\\n    margin-top: 10px;\\n    margin-bottom: 10px; } }\\n\\n@media (max-width: 699px) {\\n  .our-projects__heading {\\n    width: 100%;\\n    margin: 0px; }\\n  .our-projects__heading h2 {\\n    margin-left: 10%;\\n    margin-top: 35px;\\n    width: 83.33%;\\n    font-size: 24px;\\n    line-height: 28px; }\\n  .our-projects__heading p {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-top: 10px;\\n    width: 83.33%;\\n    margin-left: 10%; }\\n  .our-projects__heading:last-of-type {\\n    margin-left: 0.5%;\\n    width: 98.3%;\\n    margin-top: 16px;\\n    margin-bottom: 10px; } }\\n\\n.our-projects__slider_picture {\\n  width: 920px;\\n  height: 554px;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  z-index: 2;\\n  -webkit-transition: 0.6s ease;\\n  transition: 0.6s ease;\\n  -webkit-animation-name: fade;\\n  -webkit-animation-duration: 1.5s;\\n  animation-name: fade;\\n  animation-duration: 1.5s; }\\n\\n@-webkit-keyframes fade {\\n  from {\\n    opacity: .4; }\\n  to {\\n    opacity: 1; } }\\n\\n@keyframes fade {\\n  from {\\n    opacity: .4; }\\n  to {\\n    opacity: 1; } }\\n\\n.slide1 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"); }\\n\\n.slide2 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"); }\\n\\n.slide3 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"); }\\n\\n.slide4 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \"); }\\n\\n.slide5 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \"); }\\n\\n.slide6 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \"); }\\n\\n.slide7 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \"); }\\n\\n.slide8 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \"); }\\n\\n.slide9 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \"); }\\n\\n.slide-hidden {\\n  display: none; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .our-projects__slider_picture {\\n    width: 60%;\\n    height: 400px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .our-projects__slider_picture {\\n    width: 65%;\\n    height: 250px; } }\\n\\n@media (max-width: 699px) {\\n  .our-projects__slider_picture {\\n    width: 93.33%;\\n    height: auto;\\n    margin-left: 0px;\\n    background-repeat: no-repeat;\\n    background-size: cover; }\\n  .our-projects__slider_picture::before {\\n    content: \\\"\\\";\\n    display: block;\\n    padding-top: 60%; } }\\n\\n.our-projects__slider_text {\\n  width: 470px;\\n  height: 390px;\\n  background-color: white;\\n  margin: 0px;\\n  margin-left: -140px;\\n  margin-top: 36px;\\n  z-index: 3; }\\n\\n.our-projects__slider_text h3 {\\n  margin: 0px;\\n  margin-left: 50px;\\n  font-size: 18px;\\n  line-height: 26px;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: 100;\\n  margin-top: 56px; }\\n\\n.our-projects__slider_text p {\\n  margin: 0px;\\n  margin-left: 50px;\\n  margin-top: 10px;\\n  font-size: 16px;\\n  line-height: 24px;\\n  width: 359px;\\n  text-align: left;\\n  height: 283px;\\n  font-family: Arial, Helvetica, sans-serif; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .our-projects__slider_text {\\n    width: 45%;\\n    height: 300px;\\n    background-color: white;\\n    margin: 0px;\\n    margin-left: -5%;\\n    margin-top: 20px;\\n    z-index: 3; }\\n  .our-projects__slider_text h3 {\\n    margin: 0px;\\n    margin-left: 30px;\\n    font-size: 16px;\\n    line-height: 20px;\\n    font-weight: 100;\\n    margin-top: 26px; }\\n  .our-projects__slider_text p {\\n    margin: 0px;\\n    margin-left: 30px;\\n    margin-top: 10px;\\n    font-size: 13px;\\n    line-height: 24px;\\n    width: 359px;\\n    text-align: left;\\n    height: auto; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .our-projects__slider_text {\\n    width: 55%;\\n    height: 230px;\\n    background-color: white;\\n    margin: 0px;\\n    margin-left: -15%;\\n    margin-top: 10px; }\\n  .our-projects__slider_text h3 {\\n    margin: 0px;\\n    margin-left: 20px;\\n    font-size: 14px;\\n    line-height: 20px;\\n    margin-top: 10px; }\\n  .our-projects__slider_text p {\\n    margin-left: 20px;\\n    margin-top: 10px;\\n    font-size: 12px;\\n    line-height: 18px;\\n    width: 90%;\\n    text-align: left;\\n    height: auto; } }\\n\\n@media (max-width: 699px) {\\n  .our-projects__slider_text {\\n    width: 93.33%;\\n    height: auto;\\n    margin: 0px;\\n    margin-left: 6.67%;\\n    margin-top: -30px; }\\n  .our-projects__slider_text h3 {\\n    margin: 0px;\\n    margin-left: 20px;\\n    font-size: 14px;\\n    line-height: 20px;\\n    margin-top: 23px; }\\n  .our-projects__slider_text p {\\n    margin: 0 auto;\\n    margin-top: 9px;\\n    font-size: 12px;\\n    line-height: 18px;\\n    width: 85.71%;\\n    text-align: left;\\n    height: auto;\\n    padding-bottom: 20px; } }\\n\\n.our-projects__slider_arrows {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n  width: 20px;\\n  height: 20px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: absolute;\\n  right: 60px;\\n  bottom: 55px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .our-projects__slider_arrows {\\n    width: 20px;\\n    height: 18px;\\n    right: 50px;\\n    bottom: 30px; } }\\n\\n@media (max-width: 699px) {\\n  .our-projects__slider_arrows {\\n    display: none; } }\\n\\n.our-projects__slider {\\n  width: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  margin: 0px;\\n  margin-top: 55px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .our-projects__slider {\\n    width: 100%;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    position: relative;\\n    margin: 0px;\\n    margin-top: 35px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .our-projects__slider {\\n    margin-top: 15px; } }\\n\\n@media (max-width: 699px) {\\n  .our-projects__slider {\\n    width: 100%;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    margin-top: 25px; } }\\n\\n.our-projects {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  width: 100%;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column; }\\n\\n.inteco-now__top-block_heading {\\n  width: 44.36%; }\\n\\n.inteco-now__top-block_heading h3 {\\n  font-size: 32px;\\n  line-height: 38px;\\n  color: #4764b0;\\n  margin: 0px;\\n  font-family: arial;\\n  font-weight: bold; }\\n\\n.inteco-now__top-block_heading p {\\n  font-size: 16px;\\n  line-height: 24px;\\n  margin: 0px;\\n  margin-top: 15px;\\n  width: 100%;\\n  text-align: left; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .inteco-now__top-block_heading {\\n    width: 45%; }\\n  .inteco-now__top-block_heading h3 {\\n    font-size: 26px;\\n    line-height: 16px; }\\n  .inteco-now__top-block_heading p {\\n    font-size: 13px;\\n    line-height: 20px;\\n    margin: 0px;\\n    margin-top: 15px;\\n    width: 100%;\\n    text-align: left; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .inteco-now__top-block_heading {\\n    width: 45%; }\\n  .inteco-now__top-block_heading p {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-top: 10px; } }\\n\\n@media (max-width: 699px) {\\n  .inteco-now__top-block_heading {\\n    width: 42.55%; }\\n  .inteco-now__top-block_heading p {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-top: 13px;\\n    margin-left: 1%; } }\\n\\n.inteco-now__top-block_stats {\\n  width: 50%;\\n  margin-top: 15px;\\n  margin-left: 80px; }\\n\\n.inteco-now__top-block_stats h4 {\\n  font-size: 16px;\\n  line-height: 24px;\\n  font-weight: bold;\\n  margin: 0px;\\n  font-family: Arial, Helvetica, sans-serif; }\\n\\n.inteco-now__top-block_stats p {\\n  font-size: 16px;\\n  line-height: 24px;\\n  font-weight: 100;\\n  margin: 0px;\\n  margin-top: 5px;\\n  font-family: Arial, Helvetica, sans-serif; }\\n\\n.inteco-now__top-block_stats span {\\n  font-size: 48px;\\n  line-height: 42px; }\\n\\n.inteco-now__top-block_stats:last-of-type {\\n  margin-left: 84px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .inteco-now__top-block_stats {\\n    width: 21%;\\n    margin-top: 29px;\\n    margin-left: 30px; }\\n  .inteco-now__top-block_stats h4 {\\n    font-size: 14px;\\n    line-height: 20px; }\\n  .inteco-now__top-block_stats p {\\n    font-size: 14px;\\n    line-height: 20px;\\n    margin-top: 2px; }\\n  .inteco-now__top-block_stats span {\\n    font-size: 36px;\\n    line-height: 28px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .inteco-now__top-block_stats {\\n    width: 28%;\\n    margin-top: 27px;\\n    margin-left: 13px; }\\n  .inteco-now__top-block_stats h4 {\\n    font-size: 13px;\\n    line-height: 16px; }\\n  .inteco-now__top-block_stats p {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-top: 2px; }\\n  .inteco-now__top-block_stats span {\\n    font-size: 20px;\\n    line-height: 24px; }\\n  .inteco-now__top-block_stats:last-of-type {\\n    margin-left: 50px; } }\\n\\n@media (max-width: 699px) {\\n  .inteco-now__top-block_stats {\\n    width: 70%;\\n    margin-top: 12px;\\n    margin-left: 22px; }\\n  .inteco-now__top-block_stats h4 {\\n    font-size: 12px;\\n    line-height: 18px; }\\n  .inteco-now__top-block_stats span {\\n    font-size: 36px;\\n    line-height: 36px; }\\n  .inteco-now__top-block_stats p {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-top: 5px; }\\n  .inteco-now__top-block_stats:last-of-type {\\n    margin-left: 22px;\\n    margin-top: 10px; } }\\n\\n.inteco-now__top-block {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  width: 90%;\\n  margin: 0 auto; }\\n\\n.inteco-now__top-block-mobile {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -ms-flex-wrap: nowrap;\\n      flex-wrap: nowrap;\\n  width: 40%; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .inteco-now__top-block {\\n    width: 95%; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .inteco-now__top-block {\\n    width: 95%; } }\\n\\n@media (max-width: 699px) {\\n  .inteco-now__top-block {\\n    width: 94%;\\n    margin-left: 6%; }\\n  .inteco-now__top-block-mobile {\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: row;\\n            flex-direction: row;\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n    width: 40%; } }\\n\\n.inteco-now__bottom-block_image {\\n  width: 920px;\\n  height: 570px;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n  margin-left: -140px;\\n  z-index: 1; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .inteco-now__bottom-block_image {\\n    width: 60%;\\n    height: 399px;\\n    margin-left: -5%; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .inteco-now__bottom-block_image {\\n    width: 65%;\\n    height: 350px;\\n    margin-left: -15%; } }\\n\\n@media (max-width: 699px) {\\n  .inteco-now__bottom-block_image {\\n    width: 93.3%;\\n    height: auto;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \");\\n    margin-left: 6.7%;\\n    margin-top: -30px; }\\n  .inteco-now__bottom-block_image {\\n    content: \\\"\\\";\\n    display: block;\\n    padding-top: 58.5%; } }\\n\\n.inteco-now__bottom-block_text {\\n  width: 37.6%;\\n  background-color: white;\\n  margin-top: 35px;\\n  z-index: 2;\\n  height: 500px; }\\n\\n.inteco-now__bottom-block_text ul {\\n  margin-top: 60px;\\n  padding-left: 84px;\\n  list-style-position: outside; }\\n\\n.inteco-now__bottom-block_text li {\\n  list-style-type: none;\\n  font-size: 16px;\\n  line-height: 24px;\\n  font-family: Arial, Helvetica, sans-serif;\\n  margin-bottom: 10px;\\n  max-width: 369px; }\\n\\n.inteco-now__bottom-block_text li::before {\\n  color: #4764b0;\\n  list-style-position: outside;\\n  content: \\\"—\\\";\\n  font-size: 16px;\\n  font-weight: 700;\\n  left: -10px;\\n  line-height: 18px;\\n  position: relative;\\n  margin-left: -16px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .inteco-now__bottom-block_text {\\n    width: 45%;\\n    margin-top: 15px;\\n    height: 370px; }\\n  .inteco-now__bottom-block_text ul {\\n    margin-top: 40px;\\n    padding-left: 50px; }\\n  .inteco-now__bottom-block_text li {\\n    font-size: 13px;\\n    line-height: 20px;\\n    margin-bottom: 10px;\\n    max-width: 369px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .inteco-now__bottom-block_text {\\n    width: 55%;\\n    margin-top: 10px;\\n    height: 330px; }\\n  .inteco-now__bottom-block_text ul {\\n    margin-top: 15px;\\n    padding-left: 40px; }\\n  .inteco-now__bottom-block_text li {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-bottom: 10px;\\n    max-width: 369px; } }\\n\\n@media (max-width: 699px) {\\n  .inteco-now__bottom-block_text {\\n    width: 93.33%;\\n    margin-top: 10px;\\n    margin-right: 6.67%;\\n    height: auto;\\n    padding-bottom: 10px; }\\n  .inteco-now__bottom-block_text ul {\\n    margin-top: 23px;\\n    padding-left: 39px; }\\n  .inteco-now__bottom-block_text li {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-bottom: 0px;\\n    margin-top: 10px;\\n    max-width: 90%; }\\n  .inteco-now__bottom-block_text li:last-of-type {\\n    margin-top: 4px; }\\n  .inteco-now__bottom-block_text li::before {\\n    color: #4764b0;\\n    list-style-position: outside;\\n    content: \\\"—\\\";\\n    font-size: 12px;\\n    font-weight: 700;\\n    left: -5px;\\n    line-height: 18px;\\n    position: relative;\\n    margin-left: -13px; } }\\n\\n.inteco-now__bottom-block {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  width: 100%;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  margin-top: 54px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .inteco-now__bottom-block {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    position: relative;\\n    width: 100%;\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: row;\\n            flex-direction: row;\\n    margin-top: 34px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .inteco-now__bottom-block {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    position: relative;\\n    width: 100%;\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: row;\\n            flex-direction: row;\\n    margin-top: 15px; } }\\n\\n@media (max-width: 699px) {\\n  .inteco-now__bottom-block {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    margin-top: 35px; } }\\n\\n.inteco-now {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  width: 100%;\\n  margin: 0 auto;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column; }\\n\\n.inteco-now h3 {\\n  font-size: 32px;\\n  line-height: 38px;\\n  color: #4764b0;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  margin-top: 4px;\\n  margin-left: 60px;\\n  margin-bottom: 0px; }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .inteco-now {\\n    margin-top: 10px; } }\\n\\n@media (max-width: 699px) {\\n  .inteco-now {\\n    margin-top: 58px; }\\n  .inteco-now h3 {\\n    font-size: 24px;\\n    line-height: 28px;\\n    margin-top: 10px;\\n    margin-left: 6%;\\n    margin-bottom: 0px; } }\\n\\n.main-principles__main-block_develop {\\n  margin-left: 4%;\\n  margin-top: 43px;\\n  width: 90.75%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between; }\\n\\n.main-principles__main-block_develop p {\\n  font-size: 18px;\\n  line-height: 26px;\\n  margin: 0px; }\\n\\n.main-block_develop-image {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n  width: 20px;\\n  height: 18px;\\n  margin-top: 5px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .main-principles__main-block_develop {\\n    margin-top: 25px; }\\n  .main-principles__main-block_develop p {\\n    font-size: 16px;\\n    line-height: 20px;\\n    margin: 0px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .main-principles__main-block_develop {\\n    margin: 0 auto;\\n    margin-top: 10px;\\n    width: 96.72%; }\\n  .main-principles__main-block_develop p {\\n    font-size: 16px;\\n    line-height: 20px;\\n    margin: 0px; } }\\n\\n@media (max-width: 699px) {\\n  .main-block_develop-image {\\n    display: none; }\\n  .main-principles__main-block_develop {\\n    margin-top: 32px; }\\n  .main-principles__main-block_develop p {\\n    font-size: 14px;\\n    line-height: 20px;\\n    margin-top: 0px;\\n    margin-left: 4%; } }\\n\\n.main-principles__main-block_divider {\\n  width: 90.75%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\n  height: 4px;\\n  margin-left: 4%;\\n  margin-top: 13px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .main-principles__main-block_divider {\\n    margin-top: 10px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .main-principles__main-block_divider {\\n    width: 96.72%;\\n    margin: 0 auto;\\n    margin-top: 10px; } }\\n\\n@media (max-width: 699px) {\\n  .main-principles__main-block_divider {\\n    width: 85.72%;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n    margin: 0 auto;\\n    margin-top: 3px;\\n    height: 13px; } }\\n\\n.main-principles__main-block_text {\\n  width: 90.75%;\\n  margin-left: 4%; }\\n\\n.main-principles__main-block_text p {\\n  margin: 0px;\\n  width: 100%;\\n  margin-top: 31px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .main-principles__main-block_text p {\\n    margin-top: 20px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .main-principles__main-block_text {\\n    width: 96.72%;\\n    margin: 0 auto;\\n    margin-top: 10px; } }\\n\\n@media (max-width: 699px) {\\n  .main-principles__main-block_text {\\n    width: 89.72%;\\n    margin: 0 auto;\\n    margin-top: 16px;\\n    margin-left: 7%; }\\n  .main-principles__main-block_text p {\\n    margin-top: 0px; } }\\n\\n@media (max-width: 699px) {\\n  .main-principles__main-block_dots {\\n    margin: 0 auto;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    position: relative;\\n    height: 10px;\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center;\\n    margin-top: -10px;\\n    margin-left: 26px;\\n    width: 92%;\\n    cursor: pointer; }\\n  .main-principles__main-block_dots-image {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \");\\n    width: 6px;\\n    height: 6px;\\n    margin-right: 9px; }\\n  .choosen {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \");\\n    width: 10px;\\n    height: 10px;\\n    margin-top: -2px; } }\\n\\n.main-principles__main-block {\\n  width: 95.2%;\\n  margin-left: 4.8%;\\n  margin-top: 28px;\\n  height: 320px;\\n  background-color: white; }\\n\\n.text-hidden {\\n  display: none; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .main-principles__main-block {\\n    width: 90%;\\n    margin-left: 10%;\\n    margin-top: 10px;\\n    height: 240px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .main-principles__main-block {\\n    width: 100%;\\n    margin-left: 0px;\\n    margin-top: 10px;\\n    height: 240px; } }\\n\\n@media (max-width: 699px) {\\n  .main-principles__main-block {\\n    margin-left: 6.67%;\\n    width: 93.33%;\\n    margin-top: 10px;\\n    height: 458px;\\n    padding-bottom: 30px; } }\\n\\n.main-principles {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  width: 100%;\\n  margin-top: 40px; }\\n\\n.main-principles h2 {\\n  font-size: 32px;\\n  line-height: 38px;\\n  color: #4764b0; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .main-principles {\\n    margin-top: 20px; }\\n  .main-principles h2 {\\n    font-size: 26px;\\n    line-height: 16px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .main-principles {\\n    margin-top: 10px; }\\n  .main-principles h2 {\\n    font-size: 18px;\\n    line-height: 18px;\\n    margin-left: 10px; } }\\n\\n@media (max-width: 699px) {\\n  .main-principles {\\n    margin-top: 30px; }\\n  .main-principles h2 {\\n    margin-left: 6.67%;\\n    width: 85.33%;\\n    font-size: 24px;\\n    line-height: 28px;\\n    padding-bottom: 5px; } }\\n\\n.company-offer__main-block_image {\\n  width: 800px;\\n  height: 578px;\\n  margin-top: 52px;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  z-index: 2;\\n  -webkit-transition: 0.6s ease;\\n  transition: 0.6s ease;\\n  -webkit-animation-name: fade;\\n  -webkit-animation-duration: 1.5s;\\n  animation-name: fade;\\n  animation-duration: 1.5s; }\\n\\n@-webkit-keyframes fade {\\n  from {\\n    opacity: .4; }\\n  to {\\n    opacity: 1; } }\\n\\n@keyframes fade {\\n  from {\\n    opacity: .4; }\\n  to {\\n    opacity: 1; } }\\n\\n.company-image_1 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_18___ + \"); }\\n\\n.company-image_2 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_19___ + \"); }\\n\\n.company-image_3 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_20___ + \"); }\\n\\n.company-image_4 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_21___ + \"); }\\n\\n.company-image_5 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_22___ + \"); }\\n\\n.company-image_6 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_23___ + \"); }\\n\\n.company-image_7 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_24___ + \"); }\\n\\n.company-image_8 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_25___ + \"); }\\n\\n.company-image_9 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_26___ + \"); }\\n\\n.company-image_10 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_27___ + \"); }\\n\\n.company-image_11 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_28___ + \"); }\\n\\n.company-image-hidden {\\n  display: none; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .company-offer__main-block_image {\\n    width: 440px;\\n    height: 402px;\\n    margin-top: 25px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .company-offer__main-block_image {\\n    width: 65%;\\n    height: 400px;\\n    margin-top: 125px; } }\\n\\n@media (max-width: 699px) {\\n  .company-offer__main-block_image {\\n    width: 93.33%;\\n    height: auto;\\n    margin-top: 0px; }\\n  @-webkit-keyframes ani {\\n    0% {\\n      width: 0%; }\\n    100% {\\n      width: 93.33%; } }\\n  @keyframes ani {\\n    0% {\\n      width: 0%; }\\n    100% {\\n      width: 93.33%; } }\\n  .company-offer__main-block_image::before {\\n    content: '';\\n    padding-top: 72.14%;\\n    display: block; } }\\n\\n.company-offer__main-block_text {\\n  background-color: white;\\n  width: 470px;\\n  height: 866px;\\n  margin-left: -20px;\\n  z-index: 3; }\\n\\n.company-offer__main-block_text ul {\\n  margin-top: 46px;\\n  padding-left: 74px;\\n  list-style-position: outside; }\\n\\n.company-offer__main-block_text li {\\n  list-style-type: none;\\n  font-size: 16px;\\n  line-height: 24px;\\n  font-family: Arial, Helvetica, sans-serif;\\n  margin-bottom: 10px;\\n  max-width: 335.6px; }\\n\\n.company-offer__main-block_text li::before {\\n  color: #4764b0;\\n  list-style-position: outside;\\n  content: \\\"—\\\";\\n  font-size: 16px;\\n  font-weight: 700;\\n  left: -10px;\\n  line-height: 18px;\\n  position: relative;\\n  margin-left: -16px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .company-offer__main-block_text {\\n    width: 510px;\\n    height: 450px;\\n    margin-left: -20px; }\\n  .company-offer__main-block_text ul {\\n    margin-top: 20px;\\n    padding-left: 44px; }\\n  .company-offer__main-block_text li {\\n    font-size: 13px;\\n    line-height: 20px;\\n    margin-bottom: 10px;\\n    max-width: 490px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .company-offer__main-block_text {\\n    width: 45%;\\n    height: 665px;\\n    margin-left: -5%; }\\n  .company-offer__main-block_text ul {\\n    margin-top: 10px;\\n    padding-left: 33px; }\\n  .company-offer__main-block_text li {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-bottom: 5px;\\n    max-width: 98%; }\\n  .company-offer__main-block_text li::before {\\n    content: \\\"—\\\";\\n    font-size: 12px;\\n    font-weight: 700;\\n    left: -10px;\\n    line-height: 18px;\\n    position: relative;\\n    margin-left: -12px; } }\\n\\n@media (max-width: 699px) {\\n  .company-offer__main-block_text {\\n    width: 93.33%;\\n    margin-left: 6.67%;\\n    margin-top: 5px; }\\n  .company-offer__main-block_text ul {\\n    margin-top: 28px;\\n    padding-left: 42px; }\\n  .company-offer__main-block_text li {\\n    font-size: 12px;\\n    line-height: 18px;\\n    margin-bottom: 8px;\\n    max-width: 98%; }\\n  .company-offer__main-block_text li::before {\\n    content: \\\"—\\\";\\n    font-size: 12px;\\n    font-weight: 700;\\n    left: -10px;\\n    line-height: 18px;\\n    position: relative;\\n    margin-left: -10px; } }\\n\\n@media (max-width: 699px) {\\n  .company-offer__main-block_dots {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    position: relative;\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center;\\n    z-index: 4;\\n    margin-top: -60px;\\n    margin-left: -13px;\\n    height: 15px;\\n    cursor: pointer; }\\n  .company-offer__main-block_dots-image {\\n    width: 6px;\\n    height: 6px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_29___ + \");\\n    margin-right: 9px;\\n    margin-top: 2px; }\\n  .choosen-white {\\n    width: 10px;\\n    height: 10px;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    position: relative;\\n    margin-bottom: 10px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_30___ + \");\\n    margin-top: 0px; } }\\n\\n.company-offer__main-block {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  width: 100%;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  margin-top: 35px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .company-offer__main-block {\\n    margin-top: 15px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .company-offer__main-block {\\n    margin-top: 10px; } }\\n\\n@media (max-width: 699px) {\\n  .company-offer__main-block {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    margin-top: 27px; } }\\n\\n.company-offer__arrow {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n  width: 20px;\\n  height: 18px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: absolute;\\n  left: 58px;\\n  bottom: 108px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .company-offer__arrow {\\n    left: 20px;\\n    bottom: 15px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .company-offer__arrow {\\n    left: 20px;\\n    bottom: 15px; } }\\n\\n.company-offer {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  width: 100%;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  padding-bottom: 50px; }\\n\\n.company-offer h2 {\\n  margin-left: 330px;\\n  margin-top: 105px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .company-offer {\\n    padding-bottom: 30px; }\\n  .company-offer h2 {\\n    margin-left: 250px;\\n    margin-top: 45px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .company-offer {\\n    padding-bottom: 10px; }\\n  .company-offer h2 {\\n    margin: 0 auto;\\n    margin-top: 20px; } }\\n\\n@media (max-width: 699px) {\\n  .company-offer {\\n    padding-bottom: 10px;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column; }\\n  .company-offer h2 {\\n    width: 85%;\\n    margin: 0px;\\n    margin-top: 57px;\\n    margin-left: 10%; } }\\n\\n.content {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  background-color: #f5f0f0;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column; }\\n\\n.vertical-line {\\n  width: 2px;\\n  position: absolute;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_31___ + \");\\n  z-index: 1; }\\n\\n.we-are-line {\\n  height: 1695px;\\n  top: -4px;\\n  left: 296px; }\\n\\n.inteco-now-vertical-line {\\n  height: 625px;\\n  left: 296px;\\n  top: 1937px; }\\n\\n.company-offer-vertical-line {\\n  height: 1046px;\\n  left: 296px;\\n  top: 3069px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .we-are-line {\\n    height: 1095px;\\n    top: -4px;\\n    left: 260px; }\\n  .inteco-now-vertical-line {\\n    height: 418px;\\n    left: 335px;\\n    top: 1263px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .vertical-line {\\n    display: none; } }\\n\\n@media (max-width: 699px) {\\n  .vertical-line {\\n    width: 1px; }\\n  .we-are-line {\\n    left: 3.2%;\\n    top: 83px;\\n    height: 1358px; }\\n  .inteco-now-vertical-line {\\n    height: 538px;\\n    left: 3.2%;\\n    top: 1815px; }\\n  .company-offer-vertical-line {\\n    height: 1000px;\\n    left: 3.2%;\\n    top: 2943px; } }\\n\\n.horizontal-line {\\n  height: 2px;\\n  position: absolute;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_32___ + \");\\n  z-index: 1; }\\n\\n.our-project-line {\\n  width: 952px;\\n  top: 1690px;\\n  left: 296px; }\\n\\n.inteco-now-line {\\n  width: 300px;\\n  top: 1937px;\\n  left: -3px; }\\n\\n.inteco-now-line-2 {\\n  width: 952px;\\n  top: 2560px;\\n  left: 296px; }\\n\\n.company-offer-line {\\n  width: 300px;\\n  left: -2px;\\n  top: 3069px; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .our-project-line {\\n    width: 670px;\\n    top: 1090px;\\n    left: 260px; }\\n  .inteco-now-line {\\n    width: 335px;\\n    top: 1263px;\\n    left: 0px; }\\n  .inteco-now-line-2 {\\n    width: 595px;\\n    top: 1680px;\\n    left: 335px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .horizontal-line {\\n    display: none; } }\\n\\n@media (max-width: 699px) {\\n  .horizontal-line {\\n    height: 1px;\\n    position: absolute;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_32___ + \"); }\\n  .our-project-line {\\n    width: 96.5%;\\n    top: 1441px;\\n    left: 3.2%; }\\n  .inteco-now-line {\\n    width: 11px;\\n    top: 1815px;\\n    left: 0%; }\\n  .inteco-now-line-2 {\\n    width: 96.8%;\\n    top: 2353px;\\n    left: 3.2%; }\\n  .company-offer-line {\\n    width: 11px;\\n    left: 0%;\\n    top: 2943px; } }\\n\\nbody {\\n  margin: 0px; }\\n\\n.root {\\n  margin: 0 auto;\\n  background: #FFFFFF;\\n  width: 1250px;\\n  margin-top: 52px;\\n  padding-bottom: 100px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column; }\\n\\n@media (min-width: 1020px) and (max-width: 1339px) {\\n  .root {\\n    width: 930px;\\n    margin-top: 40px;\\n    padding-bottom: 50px; } }\\n\\n@media (min-width: 700px) and (max-width: 1019px) {\\n  .root {\\n    width: 610px;\\n    margin-top: 20px;\\n    padding-bottom: 20px; } }\\n\\n@media (max-width: 699px) {\\n  .root {\\n    width: 90.90%;\\n    margin: 0 auto;\\n    margin-top: 0px;\\n    padding-bottom: 0px; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://htdev-test-requirement-html/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/Layer 2.jpg":
/*!********************************!*\
  !*** ./src/images/Layer 2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7528782c374082826642.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/Layer_2.jpg?");

/***/ }),

/***/ "./src/images/Layer_2_mobile.jpg":
/*!***************************************!*\
  !*** ./src/images/Layer_2_mobile.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60f310be86aba3015dbe.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/Layer_2_mobile.jpg?");

/***/ }),

/***/ "./src/images/Rectangle_5.jpg":
/*!************************************!*\
  !*** ./src/images/Rectangle_5.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43bcb085d159afb70230.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/Rectangle_5.jpg?");

/***/ }),

/***/ "./src/images/arrows.png":
/*!*******************************!*\
  !*** ./src/images/arrows.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee103443bf85d9edc901.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/arrows.png?");

/***/ }),

/***/ "./src/images/company_offer_1.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13d784420159aa6839c5.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_1.jpg?");

/***/ }),

/***/ "./src/images/company_offer_10.jpg":
/*!*****************************************!*\
  !*** ./src/images/company_offer_10.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a972057a486a08aff90.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_10.jpg?");

/***/ }),

/***/ "./src/images/company_offer_11.jpg":
/*!*****************************************!*\
  !*** ./src/images/company_offer_11.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"774376d924fbae09a63e.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_11.jpg?");

/***/ }),

/***/ "./src/images/company_offer_2.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ecc32106c66936bd382.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_2.jpg?");

/***/ }),

/***/ "./src/images/company_offer_3.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e2789b81e1e4431550d.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_3.jpg?");

/***/ }),

/***/ "./src/images/company_offer_4.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_4.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dccde3775f2edc554c8a.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_4.jpg?");

/***/ }),

/***/ "./src/images/company_offer_5.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_5.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d039078be857e3a8df5.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_5.jpg?");

/***/ }),

/***/ "./src/images/company_offer_6.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_6.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06a02f38746aa399f316.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_6.jpg?");

/***/ }),

/***/ "./src/images/company_offer_7.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_7.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"36f298c95b2183fd5530.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_7.jpg?");

/***/ }),

/***/ "./src/images/company_offer_8.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_8.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23abc7e0cf5f08d3c008.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_8.jpg?");

/***/ }),

/***/ "./src/images/company_offer_9.jpg":
/*!****************************************!*\
  !*** ./src/images/company_offer_9.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"59f087f2a73981c262de.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/company_offer_9.jpg?");

/***/ }),

/***/ "./src/images/divider.jpg":
/*!********************************!*\
  !*** ./src/images/divider.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a90c6b9d9c18073f044.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/divider.jpg?");

/***/ }),

/***/ "./src/images/divider_mobile.jpg":
/*!***************************************!*\
  !*** ./src/images/divider_mobile.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"48755c610afe02800d63.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/divider_mobile.jpg?");

/***/ }),

/***/ "./src/images/eclipse.jpg":
/*!********************************!*\
  !*** ./src/images/eclipse.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8313724908ed9134f6b.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/eclipse.jpg?");

/***/ }),

/***/ "./src/images/eclipse_choosen.jpg":
/*!****************************************!*\
  !*** ./src/images/eclipse_choosen.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ac5da5fc152ea86c03c.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/eclipse_choosen.jpg?");

/***/ }),

/***/ "./src/images/ecpilse_white.png":
/*!**************************************!*\
  !*** ./src/images/ecpilse_white.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c8cf03f0b31f07f97b7.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/ecpilse_white.png?");

/***/ }),

/***/ "./src/images/ecpilse_white_choosen.png":
/*!**********************************************!*\
  !*** ./src/images/ecpilse_white_choosen.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a381031379e3ed24aa13.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/ecpilse_white_choosen.png?");

/***/ }),

/***/ "./src/images/horizontal_line.jpg":
/*!****************************************!*\
  !*** ./src/images/horizontal_line.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b56b0422b9abfb488b9c.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/horizontal_line.jpg?");

/***/ }),

/***/ "./src/images/inteco-now_mobile.jpg":
/*!******************************************!*\
  !*** ./src/images/inteco-now_mobile.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80c49b9b7f887ae8d7f2.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/inteco-now_mobile.jpg?");

/***/ }),

/***/ "./src/images/layer 21.jpg":
/*!*********************************!*\
  !*** ./src/images/layer 21.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80c49b9b7f887ae8d7f2.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/layer_21.jpg?");

/***/ }),

/***/ "./src/images/slider_1.jpg":
/*!*********************************!*\
  !*** ./src/images/slider_1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cd2c1ac086dbba419c6.jpg\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_1.jpg?");

/***/ }),

/***/ "./src/images/slider_2.png":
/*!*********************************!*\
  !*** ./src/images/slider_2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fba56632071bc8b2fd95.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_2.png?");

/***/ }),

/***/ "./src/images/slider_3.png":
/*!*********************************!*\
  !*** ./src/images/slider_3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"991f4fc4a8d67b9a4746.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_3.png?");

/***/ }),

/***/ "./src/images/slider_4.png":
/*!*********************************!*\
  !*** ./src/images/slider_4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"879cef509354ac2ac47a.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_4.png?");

/***/ }),

/***/ "./src/images/slider_5.png":
/*!*********************************!*\
  !*** ./src/images/slider_5.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35b41ec33a2547af1911.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_5.png?");

/***/ }),

/***/ "./src/images/slider_6.png":
/*!*********************************!*\
  !*** ./src/images/slider_6.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9bc82bcccb2adf3db0c9.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_6.png?");

/***/ }),

/***/ "./src/images/slider_7.png":
/*!*********************************!*\
  !*** ./src/images/slider_7.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f8445aafb17a4588826.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_7.png?");

/***/ }),

/***/ "./src/images/slider_8.png":
/*!*********************************!*\
  !*** ./src/images/slider_8.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9c59258231f1e037c5b.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_8.png?");

/***/ }),

/***/ "./src/images/slider_9.png":
/*!*********************************!*\
  !*** ./src/images/slider_9.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b9574c03f6e4674b480.png\";\n\n//# sourceURL=webpack://htdev-test-requirement-html/./src/images/slider_9.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0dad6a1e162df69c2323")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "htdev-test-requirement-html:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatehtdev_test_requirement_html"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;