import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { IArticulo } from 'src/app/interfaces/iarticulo';
import {ARTICULOS} from 'src/app/mocks/mocks';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {

  articulos:Array<Articulo> = [
    
  ];
    
  tecla?: string;

  ngOnInit(): void {
    this.articulos=ARTICULOS;
  }

  DownQuantity(articulo:Articulo){
    if(articulo.quantity>0){
      articulo.quantity--;
      articulo.stock++;
    }  
  }

  teclaPulsada(evento:any){
    this.tecla = evento.keyCode;
  }

  UpQuantity(articulo:Articulo) {
    if(articulo.stock>0){
      articulo.quantity++;
      articulo.stock--;
    }
    
  }

//   totalArticulos():number{
//     return this.articulos.reduce(
//       (acumulado,articulo)=> acumulado + articulos2.stock,0
//     );
//   }
 }
