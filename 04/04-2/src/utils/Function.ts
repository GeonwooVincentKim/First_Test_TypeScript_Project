export let add = new Function('a', 'b', 'return a + b')
export let result = add(1, 2)
console.log("Result (Before Export) -> ", result)
