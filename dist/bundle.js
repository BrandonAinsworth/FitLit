/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Xanh Mono\", monospace;\n  margin: 0;\n}\n\nbody, html {\n  background-color: #41BC78;\n  background-repeat: no-repeat;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n}\n\n.sidebar {\n  box-shadow: 5px 5px 5px rgba(93, 90, 90, 0.794);\n  background-color: #dfe7ef;\n}\n\n.sidebar-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n  background-color: #dfe7ef;\n}\n\n.greeting {\n  text-align: center;\n  font-size: 25px;\n}\n\n.welcome-to-fitlit {\n  font-size: 50px;\n}\n\n.user-info {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.user-full-name, .user-address, .user-email, .stride-length, .step-goal, .average-step-goal {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: #dfe7ef;\n  padding: 8px;\n}\n\n.material-symbols-outlined {\n  border: 0px;\n  text-align: center;\n  font-size: 50px;\n  margin-bottom: 20px;\n}\n\n.hydration-wrapper {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 5px;\n  margin-top: 75px;\n}\n\n.hydration-widget, .hydration-canvas, .daily-sleep-info, .weekly-sleep-info, .all-time-average-sleep-info {\n  display: flex;\n  flex-direction: column;\n  background-color: #dfe7ef;\n  box-shadow: 5px 5px 5px rgba(93, 90, 90, 0.794);\n  padding: 50px;\n  border-radius: 5%;\n}\n\n#waterDrop {\n  font-size: 50px;\n}\n\n.hydration-widget {\n  text-align: center;\n  padding-top: 58px;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hydration-widget-label {\n  font-size: 20px;\n}\n\n.sleep-wrapper {\n  display: flex;\n  justify-content: space-around;\n  width: max-content;\n  margin: 5px;\n  margin-top: 75px;\n}\n\n.daily-sleep-info, .weekly-sleep-info, .all-time-average-sleep-info {\n  margin: 10px;\n  padding: 8px;\n}\n\n#moon {\n  margin-top: 20px;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,mCAAA;EACA,SAAA;AACF;;AAEA;EACE,yBAAA;EACA,4BAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;AACF;;AAEA;EACE,+CAAA;EACA,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,yBAAA;AACF;;AAEA;EACE,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,eAAA;EACA,kBAAA;AACF;;AAEA;EACE,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,6BAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,+CAAA;EACA,aAAA;EACA,iBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,aAAA;EACA,6BAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;AACF;;AAEA;EACE,gBAAA;AACF","sourcesContent":["* {\n  font-family: 'Xanh Mono', monospace;\n  margin: 0;\n}\n\nbody, html {\n  background-color: #41BC78;\n  background-repeat: no-repeat;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n}\n\n.sidebar {\n  box-shadow: 5px 5px 5px rgba(93, 90, 90, 0.794);\n  background-color: #dfe7ef;\n}\n\n.sidebar-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n  background-color: #dfe7ef;\n}\n\n.greeting {\n  text-align: center;\n  font-size: 25px;\n}\n\n.welcome-to-fitlit {\n  font-size: 50px;\n}\n\n.user-info {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.user-full-name, .user-address, .user-email, .stride-length, .step-goal, .average-step-goal {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background-color: #dfe7ef;\n  padding: 8px;\n}\n\n.material-symbols-outlined {\n  border: 0px;\n  text-align: center;\n  font-size: 50px;\n  margin-bottom: 20px;\n}\n\n.hydration-wrapper {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 5px;\n  margin-top: 75px;\n}\n\n.hydration-widget, .hydration-canvas, .daily-sleep-info, .weekly-sleep-info, .all-time-average-sleep-info {\n  display: flex;\n  flex-direction: column;\n  background-color: #dfe7ef;\n  box-shadow: 5px 5px 5px rgba(93, 90, 90, 0.794);\n  padding: 50px;\n  border-radius: 5%;\n}\n\n#waterDrop {\n  font-size: 50px;\n}\n\n.hydration-widget {\n  text-align: center;\n  padding-top: 58px;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hydration-widget-label {\n  font-size: 20px;\n}\n\n.sleep-wrapper {\n  display: flex;\n  justify-content: space-around;\n  width: max-content;\n  margin: 5px;\n  margin-top: 75px;\n}\n\n.daily-sleep-info, .weekly-sleep-info, .all-time-average-sleep-info {\n  margin: 10px;\n  padding: 8px;\n}\n\n#moon {\n  margin-top: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* binding */ fetchData),
/* harmony export */   "promise": () => (/* binding */ promise)
/* harmony export */ });
function fetchData(type) {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${type}`)
    .then(response => checkForErrors(response));
}

let promise = Promise.all([fetchData('users'), fetchData('sleep'), fetchData('hydration')]);

function checkForErrors(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error");
    window.alert('Error: Please refresh the page.');
  }
}



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UserRepository {
  constructor(data) {
    this.allUsersData = data.userData;
  }

  returnSpecificUser(id) {
    return this.allUsersData.filter((user) => id === user.id);
  }

  averageStepGoalAllUsers() {
    let result = 0;
    let totalStepsGoal = this.allUsersData.reduce((total, user) => {
        total += user.dailyStepGoal;
        return total;
      }, 0);
    result = parseInt((totalStepsGoal / this.allUsersData.length).toFixed(0));
    return result;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRepository);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class User {
  constructor(userDetails) {
    this.user = userDetails[0];
    this.hydrationData = [];
    this.sortedHydrationData = [];
    this.sleepData = [];
    this.sortedSleepData = [];
  }

  returnUserFirstName() {
    let name = this.user.name.split(' ');
    return name[0];
  }

  getHydrationData(allHydrationData) {
    this.hydrationData = allHydrationData.returnSpecificUser(this.user.id);
  }

  averageAllTimeOuncesConsumed() {
    let totalOunces = this.hydrationData.reduce((total, dailyOunces) => {
      total += dailyOunces.numOunces;
      return total;
    }, 0);

    let averageAllTime = parseInt((totalOunces / this.hydrationData.length).toFixed());
    return averageAllTime;
  }

  returnDailyOuncesConsumed(date) {
    let dailyConsumed = this.hydrationData.find(dailyOunces => dailyOunces.date === date)
    return dailyConsumed.numOunces;
  }

  returnWeeklyOuncesConsumed() {
      this.sortedHydrationData = this.hydrationData.sort((a, b) => {
      let dateA = new Date (a.date);
      let dateB = new Date (b.date);
      return dateB - dateA;
    })

    let output = this.sortedHydrationData.filter((point, index) => index < 7);
    return output;
  }

  getSleepData(allSleepData) {
    this.sleepData = allSleepData.returnSpecificUser(this.user.id);
  }

  averageHoursSleptAllTime() {
    let totalHours = this.sleepData.reduce((total, point) => {
      total += point.hoursSlept;
      return total;
    }, 0);

    let averageAllTime = parseFloat((totalHours / this.sleepData.length).toFixed(1));
    return averageAllTime;
  }

  averageSleepQualityAllTime() {
    let totalQuality = this.sleepData.reduce((total, point) => {
      total += point.sleepQuality;
      return total;
    }, 0);

    let averageAllTime = parseFloat((totalQuality / this.sleepData.length).toFixed(1));
    return averageAllTime;
  }

  returnDailyHoursSlept(date) {
    let dailyHours = this.sleepData.find(dailyHrs => dailyHrs.date === date)
    if (dailyHours === undefined) {
      return 0;
    }
    return dailyHours.hoursSlept;
  }

  returnDailySleepQuality(date) {
    let dailyQuality = this.sleepData.find(dailyQuality => dailyQuality.date === date)
    return dailyQuality.sleepQuality;
  }

  returnWeeklySleepData(date) {
    this.sortedSleepData = this.sleepData.sort((a, b) => {
      let dateA = new Date (a.date);
      let dateB = new Date (b.date);
      return dateB - dateA;
    });

    let index = this.sortedSleepData.findIndex((e) => e.date === date);

    let output = [];

    for (let i = 0; i < 7; i++) {
      output.push(this.sortedSleepData[index + i]);
    }

    return output;
  }

  returnLatestWeekSleepData() {
    this.returnWeeklySleepData();
    let output = this.sortedSleepData.filter((point, index) => index < 7);
    return output;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Hydration {
  constructor(data) {
    this.allUsersHydrationData = data;
  }

  returnSpecificUser(id) {
    let hydroFilter = this.allUsersHydrationData.hydrationData.filter((user) => id === user.userID);
    return hydroFilter;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hydration);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Sleep {
  constructor(allUsersSleepData) {
    this.allUsersSleepData = allUsersSleepData.sleepData;
  }

  returnSpecificUser(id) {
    let userSleep = this.allUsersSleepData.filter((user) => id === user.userID);
    return userSleep;
  }

  averageSleepQualityAllUsers() {
    let result = 0;
    let totalSleepQuality = this.allUsersSleepData.reduce((total, user) => {
        total += user.sleepQuality;
        return total;
      }, 0);
      result = parseFloat((totalSleepQuality / this.allUsersSleepData.length).toFixed(1));
      return result;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sleep);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _UserRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _Hydration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _Sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);







/*~~~~~~~~QUERY SELECTORS~~~~~~~*/
var userFirstName = document.querySelector(".greeting");
var userFullName = document.querySelector(".user-full-name");
var userAddress = document.querySelector(".user-address");
var userEmail = document.querySelector(".user-email");
var userStepGoal = document.querySelector(".step-goal");
var userStrideLength = document.querySelector(".stride-length");
var averageStepGoal = document.querySelector(".average-step-goal");
var totalDailyOunces = document.querySelector(".total-daily-ounces");
var weeklyWaterConsumption = document.querySelector(".weekly-water-consumption");
var dailyHoursSlept = document.querySelector(".daily-hours-slept");
var dailySleepQuality = document.querySelector(".daily-sleep-quality");
var weeklySleepData = document.querySelector(".weekly-sleep-data");
var allTimeAverageHoursSlept = document.querySelector(".average-hours-slept");
var allTimeAverageSleepQuality = document.querySelector(".average-sleep-quality");

/*~~~~~~~~GLOBAL VARIABLES~~~~~~~*/
var userRepo;
var individual;
var sleepData;
var sleepRepo;
var hydrationData;
var hydrationRepo;
var weeklyConsumption;
var dailyConsumption;

const getRandomID = () => {
  return Math.floor(Math.random() * 50);
}

const id = getRandomID();

function getData(){
  _apiCalls__WEBPACK_IMPORTED_MODULE_1__.promise.then(data => {

    userRepo = new _UserRepository__WEBPACK_IMPORTED_MODULE_2__["default"](data[0]);
    individual = new _User__WEBPACK_IMPORTED_MODULE_3__["default"](userRepo.returnSpecificUser(id));
    getUserInfo(id);
    compareAverageStepGoal();
    renderGreeting();

    hydrationData = data[2];
    hydrationRepo = new _Hydration__WEBPACK_IMPORTED_MODULE_4__["default"](hydrationData);
    individual.hydrationData.push(hydrationRepo.returnSpecificUser(id));
    individual.getHydrationData(hydrationRepo);
    weeklyConsumption = individual.returnWeeklyOuncesConsumed();
    dailyConsumption = individual.returnDailyOuncesConsumed(weeklyConsumption[0].date);
    renderWeeklyWaterConsumption(weeklyConsumption);
    totalDailyOunces.innerText = `${dailyConsumption} oz. consumed today!`;

    sleepData = data[1];
    sleepRepo = new _Sleep__WEBPACK_IMPORTED_MODULE_5__["default"](sleepData);
    individual.getSleepData(sleepRepo);
    let latestWeekSleepData = individual.returnLatestWeekSleepData();
    let myDate = latestWeekSleepData[0].date;
    dailyHoursSlept.innerText = `Daily Hours Slept for ${myDate}: ${individual.returnDailyHoursSlept(myDate)}`;
    dailySleepQuality.innerText = `Daily Sleep Quality for ${myDate}: ${individual.returnDailySleepQuality(myDate)}`;
    individual.returnWeeklySleepData(myDate).forEach(data => {
        weeklySleepData.innerText +=  `Date ${data.date}: Hours Slept: ${data.hoursSlept} Sleep Quality: ${data.sleepQuality}\n`;
    });
    allTimeAverageHoursSlept.innerText = `Average Hours Slept All Time: ${individual.averageHoursSleptAllTime()}`;
    allTimeAverageSleepQuality.innerText = `Average Sleep Quality All Time: ${individual.averageSleepQualityAllTime()}`;
  });
}

getData()

/*~~~~~~~~FUNCTIONS~~~~~~~*/
function getUserInfo(id) {
    var currentUser = userRepo.returnSpecificUser(id);
    userFullName.innerText = `Name: ${currentUser[0].name}`;
    userAddress.innerText = `Address: ${currentUser[0].address}`;
    userEmail.innerText = `Email: ${currentUser[0].email}`;
    userStrideLength.innerText = `Stride Length: ${currentUser[0].strideLength}ft`;
    userStepGoal.innerText = `Your Step Goal: ${currentUser[0].dailyStepGoal}`;
    return currentUser;
}

function renderGreeting() {
   userFirstName.innerText = `Hello, ${individual.returnUserFirstName()}!`;
}

function compareAverageStepGoal(){
   averageStepGoal.innerText = `All FitLit Users Average Step Goal: ${userRepo.averageStepGoalAllUsers()}`;
}

function renderWeeklyWaterConsumption(weeklyConsumption) {
  let chartOutput = weeklyConsumption.reduce((acc, dailyOunces) => {
    acc += `${dailyOunces.date}: ${dailyOunces.numOunces} oz.\n`;
    return acc;
  }, "");

  weeklyWaterConsumption.innerText = chartOutput;
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map