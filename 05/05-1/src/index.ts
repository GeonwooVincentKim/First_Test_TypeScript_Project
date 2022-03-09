import { first, second, third, rest, names, jack } from "./utils/array-destructuring";

console.log("\nArray Destructuring -> ", first, second, third, rest)
console.log("------------------------------------------")

console.log("\n<For In>")
for(let index in names) {
    const name = names[index]
    console.log(`[${index}]: ${name}`)
}
console.log("------------------------------------------")

console.log("\n<Object For In>")
for(let property in jack) 
    console.log(`${property}: ${jack.age}`)
console.log("------------------------------------------")

console.log("\n<For Of>")
for(let name of ['Jack', 'Jane', 'Steve'])
    console.log(name);

console.log("------------------------------------------\n")
