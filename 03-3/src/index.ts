import { Person1, Person2, Person3 } from "./utils/classAndObject";

let jack1: Person1 = new Person1()
jack1.name = 'Jack'; jack1.age = 32;

console.log("Jack -> ", jack1)
console.log("Jack Name -> ", jack1.name);
console.log("Jack Age -> ", jack1.age);

console.log("\n--------------------------\n")

let jack2: Person2 = new Person2('Jack', 32)
console.log(jack2)

console.log("\n--------------------------\n")

let jack3: Person3 = new Person3('Jack', 32);
console.log(jack3);
