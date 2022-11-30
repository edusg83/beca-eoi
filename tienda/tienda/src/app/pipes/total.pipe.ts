import { Pipe, PipeTransform } from '@angular/core';
import { IArticulo } from '../interfaces/iarticulo';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(articulos: Array<IArticulo>, args?: string){
    return articulos.reduce(
      (acumulado,articulo)=> {return acumulado + articulo['stock']},0
    );
  }

}
