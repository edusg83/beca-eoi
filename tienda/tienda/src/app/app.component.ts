import { Component } from '@angular/core';
import { IArticulo } from './interfaces/iarticulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  articulos:Array<IArticulo> = [
    {
    id:1,
    name: 'Articulo1',
    description: 'Descripcion Articulo1',
    stock:5,
    price:120
    },

    {
      id:2,
    name: 'Articulo2',
    description: 'Descripcion Articulo2',
    stock:5,
    price:150
    },

    {
      id:3,
    name: 'Articulo3',
    description: 'Descripcion Articulo3',
    stock:0,
    price:160
    }
  ]
    
  totalArticulos():number{
    return this.articulos.reduce(
      (acumulado,articulo)=> acumulado + articulo.stock,0
    );
  }

  };

