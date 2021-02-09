export interface Person {
    firstName:string,
    lastName:string,
    address:string,
    email:string,
    fax?:number
}

export interface Cash extends Person {
    hasMoney:boolean
}
export interface Methods {
    add():void;
    sub():void; 
}