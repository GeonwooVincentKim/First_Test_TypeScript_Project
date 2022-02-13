type stringNumberFunc = (string, number) => void
export let f: stringNumberFunc = function(a: string, b: number): void {}
export let g: stringNumberFunc = function(c: string, d: number): void {}
console.log(f, g);
