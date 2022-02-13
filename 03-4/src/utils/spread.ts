let part1 = {name: 'Jane'}, part2 = {age: 33}, part3 = {city: 'Seoul', country: 'KR'};
export let merged = {...part1, ...part2, ...part3}
console.log(merged)
