import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  datoPadre:string = " ";

  outputHijo:string = " ";


  recogerDatos (event:string){
    this.outputHijo = event
  }
}
