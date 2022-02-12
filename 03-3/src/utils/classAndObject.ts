import { IPerson4 } from "./classAndObject_Interface";
import { APerson5 } from "./classAndAbstractClass";

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

export class Person4 implements IPerson4 {
    constructor(public name: string, public age?: number) {}
}

export class Person5 extends APerson5 {
    constructor(public name: string, age?: number) {
        super(age)
    }    
}
