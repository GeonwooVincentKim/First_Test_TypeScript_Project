let n: number = 1
let b: boolean = true
let s: string = 'hello'
let o: object = {}
console.log("n -> ", n + "\nb -> " + b, "\ns -> " + s, "\no -> " + o)
console.log("\n--------------------------------\n")

let a: any = 0
a = 'hello'
console.log("a -> ", a)
a = true
console.log("a -> ", a)
a = {}
console.log("a -> ", a)
console.log("\n--------------------------------\n")

let u: undefined = undefined
console.log("u -> " + u);

let count = 10, message = "Your count"
let result = `${message} is ${count}`
console.log("Result -> ", result);
console.log("\n--------------------------------\n")

let o1: object = {name: "Jack", age: 32}
o1 = {first: 1, second: 2}
console.log("O1 -> " + o1)
