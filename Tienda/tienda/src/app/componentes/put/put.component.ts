import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit{
  id?:number;
  name?:string;
  description?:string;
  image?:string = "assets/balon.png";
  stock:number = 0;
  price:number = 0;
  selected?:boolean = false;
  quantity:number = 0; 


  constructor(private servicioArticulo: ArticulosServiceService, private route:ActivatedRoute, private router:Router){

  }


  ngOnInit(){
    this.route.params.subscribe(params=>{
      const id = <string>params['id']
      this.id = parseInt(id);
    })
  }

  ngOnChanges(changes:SimpleChanges):void{
    this.route.params.subscribe(params=>{
      const id = <string>params['id']
      this.id = parseInt(id);
    });
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
