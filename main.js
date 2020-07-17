(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../social-media/src/lib/icon/icon.component.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/travis/build/vickui/social-media/node_modules/raw-loader/dist/cjs.js!../social-media/src/lib/icon/icon.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"icon !== undefined\" [ngClass]=\"icon.stylesClass\">\n    <a [href]=\"icon.navigateToUrl\" target=\"_blank\" alt=\"\">\n        <fa [name]=\"icon.angularfontAwesomeIconName\" [size]=\"icon.angularfontAwesomeIconSize\"></fa>\n    </a>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../social-media/src/lib/social-media.component.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/travis/build/vickui/social-media/node_modules/raw-loader/dist/cjs.js!../social-media/src/lib/social-media.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul *ngIf=\"hasListOfIcos()\">\n    <li *ngFor=\"let icon of icons\">\n        <lib-icon [name]=\"icon.name\" [url]=\"icon.url\"></lib-icon>\n    </li>\n</ul>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!***************************************************************************************************************!*\
  !*** /home/travis/build/vickui/social-media/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center\">\n  <h1> {{ title }} </h1>\n  <br>\n  <div>\n    <h2> Angular Components </h2>\n\n    <h3>Single Icon </h3>\n    <lib-icon [name]=\"singleIcon.name\" [url]=\"singleIcon.url\"></lib-icon>\n    <h3>List of Icons </h3>\n    <lib-social-media [icons]=\"listOfIcons\"></lib-social-media>\n  </div>\n\n  <div>\n    <h2> Angular Elements </h2>\n\n    <h3>Single Icon </h3>\n    <icon-element name=\"{{singleIcon.name}}\" url=\"{{singleIcon.url}}\"></icon-element> \n    \n    <h3>List of Icons </h3>\n    <social-media-element icons='[\n      { \"name\": \"skype\", \"url\": \"https://www.skype.com\" },\n      { \"name\": \"instagram\", \"url\": \"https://www.instagram.com\" },\n      { \"name\": \"medium\", \"url\": \"https://www.medium.com\" },\n      { \"name\": \"twitter\", \"url\": \"https://www.twitter.com\" },\n      { \"name\": \"linkedin\", \"url\": \"https://www.linkedin.com\" },\n      { \"name\": \"facebook\", \"url\": \"https://my.workplace.com\" },\n      { \"name\": \"slack\", \"url\": \"https://join.slack.com/t/iam-labs/signup\" },\n      { \"name\": \"github\", \"url\": \"https://github.com/iam-labs\" }\n      ]'>\n    </social-media-element>  \n  </div>\n\n</div>\n\n");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!******************************************************************************!*\
  !*** /home/travis/build/vickui/social-media/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../social-media/src/lib/icon/icon.component.scss":
/*!********************************************************!*\
  !*** ../social-media/src/lib/icon/icon.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC92aWNrdWkvc29jaWFsLW1lZGlhL3Byb2plY3RzL3NvY2lhbC1tZWRpYS9zcmMvbGliL2ljb24vaWNvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NvY2lhbC1tZWRpYS9zcmMvbGliL2ljb24vaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvc29jaWFsLW1lZGlhL3NyYy9saWIvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVyIHsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cbiIsIi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "../social-media/src/lib/icon/icon.component.ts":
/*!******************************************************!*\
  !*** ../social-media/src/lib/icon/icon.component.ts ***!
  \******************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _social_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-media.service */ "../social-media/src/lib/social-media.service.ts");



var IconComponent = /** @class */ (function () {
    function IconComponent(socialMediaService) {
        this.socialMediaService = socialMediaService;
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    IconComponent.prototype.ngAfterContentChecked = function () {
        this.icon = this.socialMediaService.getIcon(this.name, this.url);
    };
    IconComponent.prototype.ngOnChanges = function () {
        if (this.icon) {
            this.icon = this.socialMediaService.getIcon(this.name, this.url);
        }
    };
    IconComponent.ctorParameters = function () { return [
        { type: _social_media_service__WEBPACK_IMPORTED_MODULE_2__["SocialMediaService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IconComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IconComponent.prototype, "url", void 0);
    IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-icon',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icon.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../social-media/src/lib/icon/icon.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icon.component.scss */ "../social-media/src/lib/icon/icon.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_social_media_service__WEBPACK_IMPORTED_MODULE_2__["SocialMediaService"]])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "../social-media/src/lib/icon/icon.model.ts":
/*!**************************************************!*\
  !*** ../social-media/src/lib/icon/icon.model.ts ***!
  \**************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var Icon = /** @class */ (function () {
    function Icon(stylesClass, navigateToUrl, angularfontAwesomeIconName, angularfontAwesomeIconSize, noIconText) {
        if (stylesClass === void 0) { stylesClass = "text-center"; }
        if (angularfontAwesomeIconSize === void 0) { angularfontAwesomeIconSize = "lg"; }
        if (noIconText === void 0) { noIconText = "Find us on " + angularfontAwesomeIconName; }
        this.stylesClass = stylesClass;
        this.navigateToUrl = navigateToUrl;
        this.angularfontAwesomeIconName = angularfontAwesomeIconName;
        this.angularfontAwesomeIconSize = angularfontAwesomeIconSize;
        this.noIconText = noIconText;
    }
    return Icon;
}());



/***/ }),

/***/ "../social-media/src/lib/social-media.component.scss":
/*!***********************************************************!*\
  !*** ../social-media/src/lib/social-media.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  list-style-type: none;\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nul li {\n  padding: 15px;\n  border-radius: 15px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);\n  margin-right: 10px;\n}\nul li:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC92aWNrdWkvc29jaWFsLW1lZGlhL3Byb2plY3RzL3NvY2lhbC1tZWRpYS9zcmMvbGliL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NvY2lhbC1tZWRpYS9zcmMvbGliL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNJLGVBQUE7QUNDWiIsImZpbGUiOiJwcm9qZWN0cy9zb2NpYWwtbWVkaWEvc3JjL2xpYi9zb2NpYWwtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gICAgbGkge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxufSIsInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbnVsIGxpIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG51bCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "../social-media/src/lib/social-media.component.ts":
/*!*********************************************************!*\
  !*** ../social-media/src/lib/social-media.component.ts ***!
  \*********************************************************/
/*! exports provided: SocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function() { return SocialMediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SocialMediaComponent = /** @class */ (function () {
    function SocialMediaComponent() {
    }
    SocialMediaComponent.prototype.ngOnInit = function () { };
    SocialMediaComponent.prototype.ngAfterContentInit = function () {
        if (typeof this.icons === 'string') {
            this.icons = JSON.parse(this.icons);
        }
    };
    SocialMediaComponent.prototype.ngOnChanges = function () {
        if (typeof this.icons === 'string') {
            this.icons = JSON.parse(this.icons);
        }
    };
    SocialMediaComponent.prototype.hasListOfIcos = function () {
        return this.icons && typeof this.icons === 'object';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SocialMediaComponent.prototype, "icons", void 0);
    SocialMediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-social-media',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-media.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../social-media/src/lib/social-media.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-media.component.scss */ "../social-media/src/lib/social-media.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialMediaComponent);
    return SocialMediaComponent;
}());



/***/ }),

/***/ "../social-media/src/lib/social-media.module.ts":
/*!******************************************************!*\
  !*** ../social-media/src/lib/social-media.module.ts ***!
  \******************************************************/
/*! exports provided: SocialMediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaModule", function() { return SocialMediaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ "../../node_modules/@angular/elements/fesm5/elements.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "../../node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _social_media_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-media.component */ "../social-media/src/lib/social-media.component.ts");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon/icon.component */ "../social-media/src/lib/icon/icon.component.ts");







var SocialMediaModule = /** @class */ (function () {
    function SocialMediaModule(injector) {
        this.injector = injector;
        var SocialMediaElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_social_media_component__WEBPACK_IMPORTED_MODULE_5__["SocialMediaComponent"], { injector: injector });
        // Register the custom element with the browser.
        customElements.define('social-media-element', SocialMediaElement);
        var IconElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], { injector: injector });
        customElements.define('icon-element', IconElement);
    }
    SocialMediaModule.prototype.ngDoBootstrap = function () { };
    SocialMediaModule.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    SocialMediaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_social_media_component__WEBPACK_IMPORTED_MODULE_5__["SocialMediaComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"]],
            exports: [_social_media_component__WEBPACK_IMPORTED_MODULE_5__["SocialMediaComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]],
            entryComponents: [_social_media_component__WEBPACK_IMPORTED_MODULE_5__["SocialMediaComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], SocialMediaModule);
    return SocialMediaModule;
}());



/***/ }),

/***/ "../social-media/src/lib/social-media.service.ts":
/*!*******************************************************!*\
  !*** ../social-media/src/lib/social-media.service.ts ***!
  \*******************************************************/
/*! exports provided: SocialMediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaService", function() { return SocialMediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icon_icon_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon/icon.model */ "../social-media/src/lib/icon/icon.model.ts");



var SocialMediaService = /** @class */ (function () {
    function SocialMediaService() {
    }
    SocialMediaService.prototype.getIcon = function (socialMedia, socialMediaUrl) {
        var icons = {
            'facebook': this.socialMediaIcon('facebook', socialMediaUrl),
            'instagram': this.socialMediaIcon('instagram', socialMediaUrl),
            'twitter': this.socialMediaIcon('twitter', socialMediaUrl),
            'github': this.socialMediaIcon('github', socialMediaUrl),
            'medium': this.socialMediaIcon('medium', socialMediaUrl),
            'skype': this.socialMediaIcon('skype', socialMediaUrl),
            'linkedin': this.socialMediaIcon('linkedin', socialMediaUrl),
            'youtube': this.socialMediaIcon('youtube', socialMediaUrl),
            'slack': this.socialMediaIcon('slack', socialMediaUrl)
        };
        return icons[socialMedia];
    };
    SocialMediaService.prototype.socialMediaIcon = function (name, navigateToUrl) {
        return new _icon_icon_model__WEBPACK_IMPORTED_MODULE_2__["Icon"](undefined, navigateToUrl, name, undefined, undefined);
    };
    SocialMediaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialMediaService);
    return SocialMediaService;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zb2NpYWwtbWVkaWEtc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Social Media Library Showcase';
        this.singleIcon = { name: 'youtube', url: 'https://www.youtube.com' };
        this.listOfIcons = [
            { name: 'skype', url: 'https://www.skype.com' },
            { name: 'instagram', url: 'https://www.instagram.com' },
            { name: 'medium', url: 'https://www.medium.com' },
            { name: 'twitter', url: 'https://www.twitter.com' },
            { name: 'linkedin', url: 'https://www.linkedin.com' },
            { name: 'facebook', url: 'https://my.workplace.com' },
            { name: 'slack', url: 'https://join.slack.com/t/iam-labs/signup' },
            { name: 'github', url: 'https://github.com/iam-labs' }
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "../../node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _social_media_src_lib_social_media_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../social-media/src/lib/social-media.module */ "../social-media/src/lib/social-media.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"], _social_media_src_lib_social_media_module__WEBPACK_IMPORTED_MODULE_7__["SocialMediaModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/vickui/social-media/projects/social-media-showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map