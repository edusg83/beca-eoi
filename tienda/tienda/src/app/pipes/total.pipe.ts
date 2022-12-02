import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from '../clases/articulo';
import { IArticulo } from '../interfaces/iarticulo';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(articulos: Array<Articulo>, nombreAtributo:string):number {
    return articulos.reduce((acumulado:number,articulo:Articulo)=>{
      return acumulado+articulo[nombreAtributo];},0
    );
  }
}
