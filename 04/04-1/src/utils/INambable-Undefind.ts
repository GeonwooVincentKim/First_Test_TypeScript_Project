export interface INameable {
    name: string
}
export function getName(o: INameable) {
    // return o.name
    return o != undefined ? o.name : 'Unknown Name'
}
