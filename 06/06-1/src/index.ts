import { createRangeIterable } from "./utils/createRangeIterable";
import { iterator } from "./utils/RangeIterable-test";
import { StringIterable } from "./utils/StringIterable";

console.log("\n========================================");
console.log("Value -> \n")
for (let value of iterator) console.log(value)

console.log("------------------------------------------");
for (let value of new StringIterable(['Hello', 'world', '!'])) console.log(value);

console.log("========================================\n");
