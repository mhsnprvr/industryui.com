(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2806:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2820),fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2819),extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};var FullCalendar=function(_super){function FullCalendar(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.elRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),_this}return function __extends(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}(FullCalendar,_super),FullCalendar.prototype.render=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div",{ref:this.elRef})},FullCalendar.prototype.componentDidMount=function(){this.calendar=new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__.a(this.elRef.current,this.props),this.calendar.render()},FullCalendar.prototype.componentDidUpdate=function(oldProps){var props=this.props,updates={},removals=[];for(var propName in oldProps)propName in props||removals.push(propName);for(var propName in props)fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(props[propName],oldProps[propName])||(updates[propName]=props[propName]);this.calendar.mutateOptions(updates,removals,!1,fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a)},FullCalendar.prototype.componentWillUnmount=function(){this.calendar.destroy()},FullCalendar.prototype.getApi=function(){return this.calendar},FullCalendar}(react__WEBPACK_IMPORTED_MODULE_1__.Component);__webpack_exports__.default=FullCalendar},2820:function(module,exports,__webpack_require__){"use strict";var isArray=Array.isArray,keyList=Object.keys,hasProp=Object.prototype.hasOwnProperty;module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){var i,length,key,arrA=isArray(a),arrB=isArray(b);if(arrA&&arrB){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(arrA!=arrB)return!1;var dateA=a instanceof Date,dateB=b instanceof Date;if(dateA!=dateB)return!1;if(dateA&&dateB)return a.getTime()==b.getTime();var regexpA=a instanceof RegExp,regexpB=b instanceof RegExp;if(regexpA!=regexpB)return!1;if(regexpA&&regexpB)return a.toString()==b.toString();var keys=keyList(a);if((length=keys.length)!==keyList(b).length)return!1;for(i=length;0!=i--;)if(!hasProp.call(b,keys[i]))return!1;for(i=length;0!=i--;)if(!equal(a[key=keys[i]],b[key]))return!1;return!0}return a!=a&&b!=b}}}]);
//# sourceMappingURL=5.306e364b0abbc9c26959.bundle.js.map