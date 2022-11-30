import { Component } from '@angular/core';
import { article } from './interfaces/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
  }
  ]



  totalArticulos():number{
    return this.articulos.reduce(
      (acumulado, articulo) => acumulado+articulo.stock,0
    );
  }
}
