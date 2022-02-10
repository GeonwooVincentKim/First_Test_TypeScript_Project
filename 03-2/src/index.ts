import { IPerson, IPerson2 } from "./utils/objectAndInterface";

let good: IPerson = {name: 'Jack', age: 32}
console.log("IPerson -> ", good)
console.log("\n--------------------------------------\n")

let good2: IPerson2 = {name: 'Jack', age: 32}
console.log("IPerson1-1 -> ", good2)

let good3: IPerson2 = {name: 'Jack', age: 32, etc: true}
console.log(good3)
console.log("\n---------------------------------------\n")
