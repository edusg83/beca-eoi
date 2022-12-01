import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { article } from 'src/app/interfaces/Article';
import { ARTICULOS } from 'src/app/mocks/mocks';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {

  articulos:Array<Articulo> = [
  ];
  
  ngOnInit(): void {
    this.articulos = ARTICULOS;
  }

  
}
