import { Component } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
    name?:string;
    description?:string;
    image?:string = "assets/balon.png";
    stock:number = 0;
    price:number = 0;
    selected?:boolean = false;
    quantity:number = 0; 


    constructor(private servicioArticulo: ArticulosServiceService){

    }

  post(){
    let articulo:Articulo = new Articulo;
    articulo.name = this.name;
    articulo.description = this.description;
    articulo.image = this.image;
    articulo.stock = this.stock;
    articulo.price = this.price;
    articulo.selected = this.selected;
    articulo.quantity = this.quantity;
    

    this.servicioArticulo.postArticulo(articulo);
      
  };

}


