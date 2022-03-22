import { pureDelete } from "./pureDelete";

export const mixedArray: object[] = [
    [], {name: 'Jack'}, {name: 'Jane', age: 32}, ['description']
]

export const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val))
