import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent {
  articulos: Array<any> = [
    {
      id: 1,
      name: "Articulo1",
      description: "Descripcion articulo1",
      stock: 5,
      price:120
    },
    {
      id: 2,
      name: "Articulo2",
      description: "Descripcion articulo2",
      stock: 8,
      price:50
    },
    {
      id: 3,
      name: "Articulo3",
      description: "Descripcion articulo3",
      stock: 0,
      price:76
    },
    {
      id: 4,
      name: "Articulo4",
      description: "Descripcion articulo4",
      stock: 2,
      price:76
    }
    ];
  
    totalArticulos():number{
      return this.articulos.reduce(
        (acumulado,articulo)=> {acumulado + articulo.stock;},0
      );
    }
}
