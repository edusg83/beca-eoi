import { Component } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent {

  id:number=0;
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


  deletePlayer(){
    this.playerService.deletePlayer(this.id);
  }
}
