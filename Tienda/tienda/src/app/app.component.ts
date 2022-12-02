import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { article } from './interfaces/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:number = 0;

  constructor(private router:Router){

  }
  
  goToPut(id:number){
    this.router.navigate(['go-put', id])
  }

 
}
