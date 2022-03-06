import { arrow1, arrow2, f, isGreater, isGreater2 } from "./utils/expression";

console.log("Arrow1 -> ", arrow1);
console.log("Arrow2 -> ", arrow2);
console.log("\n----------------------------\n");

console.log();
console.log("`F` Function -> ", f);
console.log("isGreater -> ", isGreater(10, 20));
console.log("isGreater (Const & Arrow Function) -> ", isGreater2(10, 20));
