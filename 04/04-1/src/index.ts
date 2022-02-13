import { printMe } from "./utils/comments";
import { f, g } from "./utils/type-alias";
import { getName } from "./utils/INambable-Undefind";
import { getAge } from "./utils/IAgeable";
import { fn, f1, g1 } from "./utils/optional-arg";

console.log("printMe -> ", printMe('Rachel', 32));
console.log("\n---------------------------------\n");

console.log("F -> ", f);
console.log("G -> ", g);
console.log("\n---------------------------------\n");

let n = getName(undefined);
console.log("N -> Find the function type is `undefine` or not `undefine` -> ", n);
console.log("Get Name -> ", getName({name: 'Jack'}))
console.log("\n---------------------------------\n");

console.log("Get Age (Undefined) -> ", getAge(undefined))
console.log("Get Age (Null) -> ", getAge(null))
console.log("Get Age (Normal value) -> ", {age: 32});
console.log("\n---------------------------------\n");

console.log("Function fn (All Parameter) -> ", fn('hello', 1));
console.log("Function fn (Default Parameter only) -> ", fn('hello'));
console.log("\n---------------------------------\n");

console.log("F1 -> ", f1);
console.log("G1 -> ", g1);
