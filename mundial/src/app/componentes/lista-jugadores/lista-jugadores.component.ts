import { Component } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';


@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent {

  jugadores?:Array<Jugadores>;

}
