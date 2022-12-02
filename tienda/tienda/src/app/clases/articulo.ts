export class Articulo {
    id?: number;
    name?: string;
    description?: string;
    image?:string;
    stock: number=0;
    price: number=0;
    selected?:boolean=false;
    quantity:number=0;
}
