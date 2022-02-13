// arg? -> Optional Parameter, not a default Parameter
export function fn (arg1: string, arg?: number) {console.log(`arg: ${arg}`)}

type OptionalArgFunc = (string, number?) => void
export let f1: OptionalArgFunc = function(a: string): void {}
export let g1: OptionalArgFunc = function(a: string, b: number): void {}
console.log(f1, g1);
