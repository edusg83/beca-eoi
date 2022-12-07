import { Component } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-get-players',
  templateUrl: './get-players.component.html',
  styleUrls: ['./get-players.component.css']
})
export class GetPlayersComponent {
  players:Array<Player>=[];

  constructor(private playerService:PlayersService){

  }



  ngOnInit():void {
    this.playerService.getPlayers().subscribe({
      next: (players:Array<Player>)=>{
        this.players = players;
      }
    });
  }
}
