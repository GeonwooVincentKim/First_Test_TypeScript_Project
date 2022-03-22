import { mergeArray } from "./mergeArray";

export const mergedArray1: string[] = mergeArray(
    ['Hello'], ['World']
)

export const mergedArray2: number[] = mergeArray(
    [1], [2, 3], [4, 5, 6], [7, 8, 9, 10]
)

