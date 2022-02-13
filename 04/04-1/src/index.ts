import { printMe } from "./utils/comments";
import { f, g } from "./utils/type-alias";
import { getName } from "./utils/INambable-Undefind";

console.log("printMe -> ", printMe('Rachel', 32));
console.log("\n---------------------------------\n");

console.log("F -> ", f);
console.log("G -> ", g);
console.log("\n---------------------------------\n");

let n = getName(undefined);
console.log("N -> Find the function type is `undefine` or not `undefine` -> ", n);
console.log("Get Name -> ", getName({name: 'Jack'}))
