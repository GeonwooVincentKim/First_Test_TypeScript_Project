"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.g1 = exports.f1 = exports.fn = void 0;
// arg? -> Optional Parameter, not a default Parameter
function fn(arg1, arg) { console.log("arg: ".concat(arg)); }
exports.fn = fn;
var f1 = function (a) { };
exports.f1 = f1;
var g1 = function (a, b) { };
exports.g1 = g1;
console.log(exports.f1, exports.g1);
//# sourceMappingURL=optional-arg.js.map