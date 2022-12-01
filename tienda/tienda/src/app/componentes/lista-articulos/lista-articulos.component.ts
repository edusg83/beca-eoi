import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {

  articulos:Array<Articulo> = [
    
  ];
    
  tecla?: string;

  constructor(private servicioArticulo:ArticulosServiceService){
    this.articulos=[];
  }

  ngOnInit(): void {
    this.servicioArticulo.getArticulos().subscribe({
      next: (ok:Array<Articulo>)=>{
        this.articulos = ok;
      },
      error: (error)=>{

      }
    } 
    );
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
