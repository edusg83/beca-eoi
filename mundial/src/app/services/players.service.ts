import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../classes/player';
import { PARAMS } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }



  getPlayers():Observable<Array<Player>>{
    return this.http.get<Array<Player>>(PARAMS.URL_PLAYERS)
  }

  getPlayer(id:number):Observable<Player>{
    return this.http.get<Player>(PARAMS.URL_PLAYERS+"/"+id)
  }

  postPlayer(player:Player){
    this.http.post<Player>(PARAMS.URL_PLAYERS, player).subscribe();
  }

  putPlayer(player:Player){
    this.http.put<Player>(PARAMS.URL_PLAYERS+"/"+player.id, player).subscribe();
  }

  deletePlayer(id:number){
    this.http.delete<Player>(PARAMS.URL_PLAYERS+"/"+id).subscribe();
  }
}
