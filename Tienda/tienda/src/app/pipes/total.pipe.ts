import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from '../clases/articulo';
import { article } from '../interfaces/Article';





@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(articulos: Array<Articulo>, nombreAtributo: string):number{
    return articulos.reduce((acumulado:number, item:Articulo) =>
    { return acumulado+item[nombreAtributo];},0
    );
  }

}
