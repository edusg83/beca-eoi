import { Component } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Team } from 'src/app/classes/team';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-get-players',
  templateUrl: './get-players.component.html',
  styleUrls: ['./get-players.component.css']
})
export class GetPlayersComponent {
  players:Array<Player>=[];

  constructor(private playerService:PlayersService, private teamService:TeamsService){

  }



  ngOnInit():void {
    this.playerService.getPlayers().subscribe({
      next: (players:Array<Player>)=>{
        this.players = players.sort((a, b)=>a.team.name.localeCompare(b.team.name) || a.position.localeCompare(b.position));
      }
    });
  }

  // getTeam(){
  //   this.teamService.getTeam(this.id).subscribe({
  //     next: (team:Team)=>{
  //       console.log(team.name)
  //       this.name = team.name;
  //       this.players = team.players;
  //       this.ok = true;
  //       console.log(this.id)
  //     },
  //   });
  // }




}
