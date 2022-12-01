export class Articulo {
    id?:number;
    name?:string;
    description?:string;
    image?:string;
    stock:number = 0;
    price?:number;
    selected?:boolean = false;
}
