import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  id:number=7;
  router: any;


  goToPut(id:number){
    this.router.navigate(['go-clientes/go-put-cliente', id])
  }
}
