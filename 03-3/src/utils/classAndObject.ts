export class Person1 {
    name: string
    age?: number
}

export class Person2 {
    constructor(public name: string, public age?: number) {}
}

export class Person3 {
    name: string
    age?: number
    
    constructor(name: string, age?: number){
        this.name = name; this.age = age
    }
}
