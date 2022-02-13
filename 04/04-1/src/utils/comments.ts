// export function printMe(name: string, age: number): void {
//     console.log(`name: ${name}, age: ${age}`);
// }

export let printMe: (string, number) => void = function (name: string, age: number) : void {}
console.log(printMe);
