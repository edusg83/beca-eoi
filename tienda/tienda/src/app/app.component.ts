import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  articulos:Array<any> = [
    {
      id:1,
    name: 'Articulo1',
    description: 'Descripcion Articulo1',
    stock:5
    },

    {
      id:2,
    name: 'Articulo2',
    description: 'Descripcion Articulo2',
    stock:5
    },

    {
      id:3,
    name: 'Articulo3',
    description: 'Descripcion Articulo3',
    stock:5
    }
  ]
    
  };

