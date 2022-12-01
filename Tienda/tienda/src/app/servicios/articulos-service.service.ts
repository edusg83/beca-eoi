import { Injectable } from '@angular/core';
import { Articulo } from '../clases/articulo';
import { ARTICULOS } from '../mocks/mocks';

@Injectable({
  providedIn: 'root'
})
export class ArticulosServiceService {

  constructor() { }

  getArticulos():Array<Articulo>{
    return ARTICULOS;
  }
}
