import { Pipe, PipeTransform } from '@angular/core';
import { IArticulo } from '../interfaces/iarticulo';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(articulos: Array<IArticulo>, args:string):number {
    return articulos.reduce(
      (acumulado:number,articulo:IArticulo)=>{return acumulado+articulo['stock'];},0
    );
  }
}
