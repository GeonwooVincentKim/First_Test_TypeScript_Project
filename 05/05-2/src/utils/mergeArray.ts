export const mergeArray = <T> (...arrays: readonly T[][]): T[] => {
    let result: T[] = []

    for (let index = 0; index < arrays.length; index++) {
        const array: T[] = arrays[index]
        
        /* 
            Could generate `T[] type array` if Spread and Merge `result` and `array array` 
        */
        result = [...result, ...array]
    }

    return result
}
