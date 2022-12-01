import { Component } from '@angular/core';
import { article } from 'src/app/interfaces/Article';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent {

  articulos:Array<article> = [
  {  
    id : 1,
    name:"Articulo1",
    description:"Descripcion1",
    stock:5,
    price:120
  },
  {  
    id : 2,
    name:"Articulo2",
    description:"Descripcion2",
    stock:5,
    price:50.2
  },
  {  
    id : 3,
    name:"Articulo3",
    description:"Descripcion3",
    stock:8,
    price:70
  }
  ]
  
  
}
