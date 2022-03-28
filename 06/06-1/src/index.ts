import { createRangeIterable } from "./utils/createRangeIterable";

console.log("\n========================================");
const iterable = createRangeIterable(1, 3 + 1)

for (let value of iterable) 
    console.log(value);

console.log("\n----------------------------------------");

console.log("========================================\n");
