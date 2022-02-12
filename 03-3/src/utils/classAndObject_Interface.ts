export interface IPerson4 {
    name: string
    age?: number
}

export class Person4 implements IPerson4 {
    name: string
    age: number
}
