"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"UNA Mobile Dining App Proposal\",\n        description: \"Provided redesign for enhanced usability mobile dining app using HTML, CSS, JavaScript, and React.js\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"javaScript\"\n        ],\n        gitUrl: \"https://github.com/ConnorLBrown/June-Juliette\",\n        previewUrl: \"https://github.com/ConnorLBrown/June-Juliette\"\n    },\n    {\n        id: 2,\n        title: \"UNA Faculty Full Stack Devlopment Project\",\n        description: \"Agile Full Stack Development Project for UNA Faculty game using MongoDB, HTML, CSS, JavaScript, and Express.js\",\n        image: \"https://github.com/errorless-stone/name-game-thing\",\n        tag: [\n            \"All\",\n            \"JavaScript\"\n        ],\n        gitUrl: \"https://github.com/errorless-stone/name-game-thing\",\n        previewUrl: \"https://alabamanewscenter.com/wp-content/uploads/2017/08/UNA-LOGO.jpg\"\n    },\n    {\n        id: 3,\n        title: \"Java Customer Project\",\n        description: \"This project is practicing the implementation of a program that using Java methods and classes for a customer.\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Java\"\n        ],\n        gitUrl: \"https://github.com/ConnorLBrown/Java-Customer-Project\",\n        previewUrl: \"https://github.com/ConnorLBrown/Java-Customer-Project\"\n    },\n    {\n        id: 4,\n        title: \"\",\n        description: \"This is the projected proposal that my team made for the advising system at North Alabama. This proposal covers the requirements, maintenance, design, system sequences, flowcharts, finances, UI and UX of the proposed system\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Reviews\"\n        ],\n        gitUrl: \"https://www.linkedin.com/in/connor-brown-32591a269/details/projects/\",\n        previewUrl: \"https://www.linkedin.com/in/connor-brown-32591a269/details/projects/\"\n    },\n    {\n        id: 5,\n        title: \"Basketball Team CRUD Application\",\n        description: \"CRUD application for Basketball team using PHP, MySQL, and HTML\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"PHP\"\n        ],\n        gitUrl: \"https://github.com/ConnorLBrown/Basketball-CRUD\",\n        previewUrl: \"https://github.com/ConnorLBrown/Basketball-CRUD\"\n    },\n    {\n        id: 6,\n        title: \"AWS Lambda Project\",\n        description: \"Presentation for Software Architecture course / Python Function I used during the demo\",\n        image: \"/images/projects/6.png\",\n        tag: [\n            \"All\",\n            \"Python\"\n        ],\n        gitUrl: \"https://github.com/ConnorLBrown/AWSLambda-Presentation\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"JavaScript\",\n                        isSelected: tag === \"JavaScript\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Java\",\n                        isSelected: tag === \"Java\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Python\",\n                        isSelected: tag === \"Python\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"PHP\",\n                        isSelected: tag === \"PHP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Reviews\",\n                        isSelected: tag === \"Reviews\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\conno\\\\OneDrive\\\\Desktop\\\\DevWebsiteConnor\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQWE7UUFDMUJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFhO1FBQzFCQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTztRQUNwQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQVU7UUFDdkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBUztRQUN0QkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDSCxLQUFLSSxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixNQUFNZiw2Q0FBTUEsQ0FBQztJQUNuQixNQUFNZ0IsV0FBV1osd0RBQVNBLENBQUNXLEtBQUs7UUFBRUUsTUFBTTtJQUFLO0lBRTdDLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkwsT0FBT0s7SUFDVDtJQUVBLE1BQU1DLG1CQUFtQmYsYUFBYWdCLE1BQU0sQ0FBQyxDQUFDQyxVQUM1Q0EsUUFBUVosR0FBRyxDQUFDYSxRQUFRLENBQUNiO0lBR3ZCLE1BQU1jLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsR0FBRztZQUFJQyxTQUFTO1FBQUU7UUFDN0JDLFNBQVM7WUFBRUYsR0FBRztZQUFHQyxTQUFTO1FBQUU7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUXZCLElBQUc7OzBCQUNWLDhEQUFDd0I7Z0JBQUdDLFdBQVU7MEJBQStEOzs7Ozs7MEJBRzdFLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUM3QixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDMEI7Z0JBQUdyQixLQUFLQTtnQkFBS2dCLFdBQVU7MEJBQ3JCWCxpQkFBaUJpQixHQUFHLENBQUMsQ0FBQ2YsU0FBU2dCLHNCQUM5Qiw4REFBQ25DLGlEQUFNQSxDQUFDb0MsRUFBRTt3QkFFUkMsVUFBVWhCO3dCQUNWQyxTQUFRO3dCQUNSRyxTQUFTWixXQUFXLFlBQVk7d0JBQ2hDeUIsWUFBWTs0QkFBRUMsVUFBVTs0QkFBS0MsT0FBT0wsUUFBUTt3QkFBSTtrQ0FFaEQsNEVBQUNyQyxvREFBV0E7NEJBRVZNLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCQyxhQUFhYyxRQUFRZCxXQUFXOzRCQUNoQ29DLFFBQVF0QixRQUFRYixLQUFLOzRCQUNyQkUsUUFBUVcsUUFBUVgsTUFBTTs0QkFDdEJDLFlBQVlVLFFBQVFWLFVBQVU7MkJBTHpCVSxRQUFRaEIsRUFBRTs7Ozs7dUJBUFpnQzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakI7R0E3RU16Qjs7UUFHYVQsb0RBQVNBOzs7S0FIdEJTO0FBK0VOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzM3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi9Qcm9qZWN0Q2FyZFwiO1xyXG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiBcIlVOQSBNb2JpbGUgRGluaW5nIEFwcCBQcm9wb3NhbFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZWQgcmVkZXNpZ24gZm9yIGVuaGFuY2VkIHVzYWJpbGl0eSBtb2JpbGUgZGluaW5nIGFwcCB1c2luZyBIVE1MLCBDU1MsIEphdmFTY3JpcHQsIGFuZCBSZWFjdC5qc1wiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8xLnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJqYXZhU2NyaXB0XCJdLFxyXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Db25ub3JMQnJvd24vSnVuZS1KdWxpZXR0ZVwiLFxyXG4gICAgcHJldmlld1VybDogXCJodHRwczovL2dpdGh1Yi5jb20vQ29ubm9yTEJyb3duL0p1bmUtSnVsaWV0dGVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiVU5BIEZhY3VsdHkgRnVsbCBTdGFjayBEZXZsb3BtZW50IFByb2plY3RcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFnaWxlIEZ1bGwgU3RhY2sgRGV2ZWxvcG1lbnQgUHJvamVjdCBmb3IgVU5BIEZhY3VsdHkgZ2FtZSB1c2luZyBNb25nb0RCLCBIVE1MLCBDU1MsIEphdmFTY3JpcHQsIGFuZCBFeHByZXNzLmpzXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL2dpdGh1Yi5jb20vZXJyb3JsZXNzLXN0b25lL25hbWUtZ2FtZS10aGluZ1wiLFxyXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJKYXZhU2NyaXB0XCJdLFxyXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lcnJvcmxlc3Mtc3RvbmUvbmFtZS1nYW1lLXRoaW5nXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcImh0dHBzOi8vYWxhYmFtYW5ld3NjZW50ZXIuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA4L1VOQS1MT0dPLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogXCJKYXZhIEN1c3RvbWVyIFByb2plY3RcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgcHJvamVjdCBpcyBwcmFjdGljaW5nIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBhIHByb2dyYW0gdGhhdCB1c2luZyBKYXZhIG1ldGhvZHMgYW5kIGNsYXNzZXMgZm9yIGEgY3VzdG9tZXIuXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzMucG5nXCIsXHJcbiAgICB0YWc6IFtcIkFsbFwiLCBcIkphdmFcIl0sXHJcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Nvbm5vckxCcm93bi9KYXZhLUN1c3RvbWVyLVByb2plY3RcIixcclxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Nvbm5vckxCcm93bi9KYXZhLUN1c3RvbWVyLVByb2plY3RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBwcm9qZWN0ZWQgcHJvcG9zYWwgdGhhdCBteSB0ZWFtIG1hZGUgZm9yIHRoZSBhZHZpc2luZyBzeXN0ZW0gYXQgTm9ydGggQWxhYmFtYS4gVGhpcyBwcm9wb3NhbCBjb3ZlcnMgdGhlIHJlcXVpcmVtZW50cywgbWFpbnRlbmFuY2UsIGRlc2lnbiwgc3lzdGVtIHNlcXVlbmNlcywgZmxvd2NoYXJ0cywgZmluYW5jZXMsIFVJIGFuZCBVWCBvZiB0aGUgcHJvcG9zZWQgc3lzdGVtXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzQucG5nXCIsXHJcbiAgICB0YWc6IFtcIkFsbFwiLCBcIlJldmlld3NcIl0sXHJcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nvbm5vci1icm93bi0zMjU5MWEyNjkvZGV0YWlscy9wcm9qZWN0cy9cIixcclxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nvbm5vci1icm93bi0zMjU5MWEyNjkvZGV0YWlscy9wcm9qZWN0cy9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0bGU6IFwiQmFza2V0YmFsbCBUZWFtIENSVUQgQXBwbGljYXRpb25cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNSVUQgYXBwbGljYXRpb24gZm9yIEJhc2tldGJhbGwgdGVhbSB1c2luZyBQSFAsIE15U1FMLCBhbmQgSFRNTFwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy81LnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJQSFBcIl0sXHJcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Nvbm5vckxCcm93bi9CYXNrZXRiYWxsLUNSVURcIixcclxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Nvbm5vckxCcm93bi9CYXNrZXRiYWxsLUNSVURcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgdGl0bGU6IFwiQVdTIExhbWJkYSBQcm9qZWN0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQcmVzZW50YXRpb24gZm9yIFNvZnR3YXJlIEFyY2hpdGVjdHVyZSBjb3Vyc2UgLyBQeXRob24gRnVuY3Rpb24gSSB1c2VkIGR1cmluZyB0aGUgZGVtb1wiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy82LnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJQeXRob25cIl0sXHJcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Nvbm5vckxCcm93bi9BV1NMYW1iZGEtUHJlc2VudGF0aW9uXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUHJvamVjdHNTZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcocmVmLCB7IG9uY2U6IHRydWUgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhZ0NoYW5nZSA9IChuZXdUYWcpID0+IHtcclxuICAgIHNldFRhZyhuZXdUYWcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0c0RhdGEuZmlsdGVyKChwcm9qZWN0KSA9PlxyXG4gICAgcHJvamVjdC50YWcuaW5jbHVkZXModGFnKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcclxuICAgIGluaXRpYWw6IHsgeTogNTAsIG9wYWNpdHk6IDAgfSxcclxuICAgIGFuaW1hdGU6IHsgeTogMCwgb3BhY2l0eTogMSB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC00IG1iLTggbWQ6bWItMTJcIj5cclxuICAgICAgICBNeSBQcm9qZWN0c1xyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktNlwiPlxyXG4gICAgICAgIDxQcm9qZWN0VGFnXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPVwiQWxsXCJcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJBbGxcIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxQcm9qZWN0VGFnXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICBuYW1lPVwiSmF2YVNjcmlwdFwiXHJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiSmF2YVNjcmlwdFwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFByb2plY3RUYWdcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cclxuICAgICAgICAgIG5hbWU9XCJKYXZhXCJcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJKYXZhXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UHJvamVjdFRhZ1xyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxyXG4gICAgICAgICAgbmFtZT1cIlB5dGhvblwiXHJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiUHl0aG9uXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UHJvamVjdFRhZ1xyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxyXG4gICAgICAgICAgbmFtZT1cIlBIUFwiXHJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiUEhQXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UHJvamVjdFRhZ1xyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxyXG4gICAgICAgICAgbmFtZT1cIlJldmlld3NcIlxyXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIlJldmlld3NcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIHJlZj17cmVmfSBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1kOmdhcC0xMlwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxtb3Rpb24ubGlcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgdmFyaWFudHM9e2NhcmRWYXJpYW50c31cclxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICBhbmltYXRlPXtpc0luVmlldyA/IFwiYW5pbWF0ZVwiIDogXCJpbml0aWFsXCJ9XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZGVsYXk6IGluZGV4ICogMC40IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxyXG4gICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBpbWdVcmw9e3Byb2plY3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgZ2l0VXJsPXtwcm9qZWN0LmdpdFVybH1cclxuICAgICAgICAgICAgICBwcmV2aWV3VXJsPXtwcm9qZWN0LnByZXZpZXdVcmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L21vdGlvbi5saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNTZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb2plY3RDYXJkIiwiUHJvamVjdFRhZyIsIm1vdGlvbiIsInVzZUluVmlldyIsInByb2plY3RzRGF0YSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFnIiwiZ2l0VXJsIiwicHJldmlld1VybCIsIlByb2plY3RzU2VjdGlvbiIsInNldFRhZyIsInJlZiIsImlzSW5WaWV3Iiwib25jZSIsImhhbmRsZVRhZ0NoYW5nZSIsIm5ld1RhZyIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaW5jbHVkZXMiLCJjYXJkVmFyaWFudHMiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwic2VjdGlvbiIsImgyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsIm5hbWUiLCJpc1NlbGVjdGVkIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImltZ1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});