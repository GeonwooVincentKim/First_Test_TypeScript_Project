import { printMe } from "./utils/comments";
import { f, g } from "./utils/type-alias";
import { getName } from "./utils/INambable-Undefind";
import { getAge } from "./utils/IAgeable";

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
