import { Articulo } from "../clases/articulo"

export const ARTICULOS: Array<Articulo> = [
    {
        id:1,
        name:'Artículo 1',
        description:'Descripcion Artículo 1',
        image:'assets/balon.png',
        price:12.4,
        stock:12,
        selected:false,
        quantity:0
      },
      {
        id:2,
        name:'Artículo 2',
        description:'Descripcion Artículo 2',
        image:'assets/basketball.png',
        price:21.5,
        stock:0,
        selected:true,
        quantity:0
      },

];
