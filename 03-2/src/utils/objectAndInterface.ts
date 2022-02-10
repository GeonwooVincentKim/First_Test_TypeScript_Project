export interface IPerson {
    name: string
    age: number
}

export interface IPerson2 {
    name: string
    age: number
    etc?: boolean
}

export let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32}

export function printMe(me: {name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ?
        `${me.name} ${me.age} ${me.etc}` :
        `${me.name} ${me.age}`
    )
}
