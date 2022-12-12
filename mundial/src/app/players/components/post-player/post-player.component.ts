import { Component } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Team } from 'src/app/classes/team';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-post-player',
  templateUrl: './post-player.component.html',
  styleUrls: ['./post-player.component.css']
})
export class PostPlayerComponent {
  name:string="";
  age:number=0;
  position:string="";
  number:number=0;
  team:Team = new Team();


  constructor(private playerService:PlayersService){ }


  postPlayer(){
    let player = new Player();
    player.name = this.name;
    player.age = this.age;
    player.position = this.position;
    player.number = this.number;
    player.team = this.team;

    

    this.playerService.postPlayer(player);
  }
}
