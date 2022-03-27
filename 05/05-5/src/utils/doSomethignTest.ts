import { doSomething } from "./doSomething";

const [result, errorMessage] = doSomething()
console.log("Result & Error Message -> ", result, errorMessage)
