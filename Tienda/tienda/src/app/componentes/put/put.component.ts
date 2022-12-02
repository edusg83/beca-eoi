import { Component } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  id?:number;
  name?:string;
  description?:string;
  image?:string = "assets/balon.png";
  stock:number = 0;
  price:number = 0;
  selected?:boolean = false;
  quantity:number = 0; 


  constructor(private servicioArticulo: ArticulosServiceService){

  }

put(){
  let articulo = new Articulo;
    articulo.id = this.id;
    articulo.name = this.name;
    articulo.description = this.description;
    articulo.image = this.image;
    articulo.stock = this.stock;
    articulo.price = this.price;
    articulo.selected = this.selected;
    articulo.quantity = this.quantity;
  
  

  this.servicioArticulo.putArticulo(articulo);
    
};

}
