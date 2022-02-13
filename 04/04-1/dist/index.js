"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comments_1 = require("./utils/comments");
var type_alias_1 = require("./utils/type-alias");
var INambable_Undefind_1 = require("./utils/INambable-Undefind");
console.log("printMe -> ", (0, comments_1.printMe)('Rachel', 32));
console.log("\n---------------------------------\n");
console.log("F -> ", type_alias_1.f);
console.log("G -> ", type_alias_1.g);
console.log("\n---------------------------------\n");
var n = (0, INambable_Undefind_1.getName)(undefined);
console.log("N -> Find the function type is `undefine` or not `undefine` -> ", n);
console.log("Get Name -> ", (0, INambable_Undefind_1.getName)({ name: 'Jack' }));
//# sourceMappingURL=index.js.map