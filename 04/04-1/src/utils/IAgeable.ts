export interface IAgeable {
    age?: number
}

export function getAge(o: IAgeable){
    return o != undefined && o.age ? o.age : 0
}
