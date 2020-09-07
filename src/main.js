"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.objectMap = void 0;
function objectMap(callback) {
    var entries = Object.entries(this);
    var reduceCallback = function (acc, entry, idx, self) {
        var result = __assign(__assign({}, acc), callback(entry, idx, self));
        return result;
    };
    var initial = {};
    return entries.reduce(reduceCallback, initial);
}
exports.objectMap = objectMap;
