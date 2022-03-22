import { evenResult } from "./utils/declarative-even-sum";
import { squareSum } from "./utils/imperative-square-sum";
import { mixedArray, objectsOnly } from "./utils/pureDelete-test";
import { afterSort, beforeSort } from "./utils/pureSort-test";

console.log("\n------------------------------------");
console.log("Declarative-Even-Sum Result -> ", evenResult);
console.log("--------------------------------------");

console.log("Square Sum -> ", squareSum);
console.log("--------------------------------------");

console.log("Pure Sort (BeforeSort, AfterSort) -> ", beforeSort, afterSort);
console.log("--------------------------------------");

console.log("Mixed Array & Objects Only -> ", mixedArray, objectsOnly);
console.log("--------------------------------------\n");
