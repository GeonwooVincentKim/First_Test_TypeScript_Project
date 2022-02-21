import { result } from "./utils/Function";
import { add2 } from "./utils/function-expression";
import { f } from "./utils/first-class";
import { functionExpression, value } from "./utils/function-call";

console.log("Result (After Import) -> ", result);
console.log("Add2 (After Import) -> ", add2(1, 2));
console.log("\n------------------------\n")

console.log("First Class -> ", f(1, 2));
console.log("\n------------------------\n")

console.log("Function Expression -> ", functionExpression(1, 2));
console.log("Value -> ", value);
console.log("\n------------------------\n")

