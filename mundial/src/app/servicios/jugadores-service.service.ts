import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JUGADORES} from '../mocks/mockJuga'
import {Jugadores} from '../clases/jugadores'
import { Observable } from 'rxjs';
import {params} from '../environment/environmentSele'

@Injectable({
  providedIn: 'root'
})
export class JugadoresServiceService {

  constructor(private http:HttpClient) { }

  getJugadores():Observable<Array<Jugadores>>{
    return this.http.get<Array<Jugadores>>(params.URL_PLAYERS);
  }
}
