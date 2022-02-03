let MAX_AGE = 100

export interface IPerson {
    name: string
    age: number
}

export class Person implements IPerson {
    constructor(public name: string, public age: number) {}
}

export function makeRandomNumber(max: number = MAX_AGE) : number {
    return Math.ceil((Math.random() * max))
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({name, age})
