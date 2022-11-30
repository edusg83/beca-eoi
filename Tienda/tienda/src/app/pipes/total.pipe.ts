import { Pipe, PipeTransform } from '@angular/core';
import { article } from '../interfaces/Article';
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(articulos: Array<article>, args?: string){
    return articulos.reduce(
      (acumulado, articulo) =>{ return acumulado+articulo['stock'];},0
    );
  }

}
