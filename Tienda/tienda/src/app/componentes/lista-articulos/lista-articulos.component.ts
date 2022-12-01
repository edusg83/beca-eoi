import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { article } from 'src/app/interfaces/Article';
import { ARTICULOS } from 'src/app/mocks/mocks';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {

  articulos:Array<Articulo> = [
  ];

  tecla?:string;


  constructor(private servicioArticulo: ArticulosServiceService){

  }
  
  ngOnInit(): void {
    this.articulos = ARTICULOS;
  }

  upQuantity(articulo:Articulo){
    if (articulo.stock>0){
      articulo.quantity++;
      articulo.stock--;
    }
    
  }

  downQuantity(articulo:Articulo){
    if (articulo.quantity>0){
      articulo.quantity--;
      articulo.stock++;
    }
    
  }
  

teclaPulsada(evento:any){
  this.tecla=evento.keyCode;
}

}
