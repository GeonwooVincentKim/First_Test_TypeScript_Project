import INameable from "./utils/INameable";

let obj: object = {name: 'jack'}
console.log(obj);

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2)
