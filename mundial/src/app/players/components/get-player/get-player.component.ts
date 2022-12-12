import { Component } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Team } from 'src/app/classes/team';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-get-player',
  templateUrl: './get-player.component.html',
  styleUrls: ['./get-player.component.css']
})
export class GetPlayerComponent {
  id:number = 0;
  name:string="";
  age:number=0;
  position:string="";
  number:number=0;
  team:Team = new Team();
  ok:boolean=false;
  players:Array<Player>=[];

  constructor(private playerService:PlayersService){

  }

  ngOnInit():void {
    this.playerService.getPlayers().subscribe({
      next: (players:Array<Player>)=>{
        this.players = players.sort((a, b)=>a.name.localeCompare(b.name));
      }
    });
  }


getPlayer(){
  this.playerService.getPlayer(this.id).subscribe({
    next: (player:Player)=>{
      console.log(player.name)
      this.name = player.name;
      this.age = player.age;
      this.position = player.position;
      this.number = player.number;
      this.team = player.team;
      this.ok = true;
    }
  });
}
}
