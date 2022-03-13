import { range } from "../../../05-1/src/utils/range";
import { fold } from "./fold";
import { filter } from "./filter";

let numbers: number[] = range(1, 100 + 1)
const isEven = (n: number): boolean => n % 2 == 0

export let evenResult = fold(filter(numbers, isEven), (evenResult, value) => evenResult + value, 0)
