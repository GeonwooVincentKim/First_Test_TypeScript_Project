import { createRangeIterable } from "./createRangeIterable";

const iterable = createRangeIterable(1, 3 + 1)

/*
   Triggers `[System.iterator]` Method needs
*/
// for (let value of iterable) 
//     console.log(value);
