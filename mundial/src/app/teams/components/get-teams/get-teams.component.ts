import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Player } from 'src/app/classes/player';
import { Team } from 'src/app/classes/team';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-get-teams',
  templateUrl: './get-teams.component.html',
  styleUrls: ['./get-teams.component.css']
})
export class GetTeamsComponent implements OnInit{

  teams:Array<Team>=[];

  team:Team = new Team();

  teamPlayers:Array<Player> = new Array<Player>;

  ok:boolean = false;

  constructor(private teamService:TeamsService, private playerService:PlayersService){

  }



  ngOnInit():void {
    this.teamService.getTeams().subscribe({
      next: (teams:Array<Team>)=>{
        this.teams = teams.sort((a, b)=>a.name.localeCompare(b.name));
      }
    });
  }


  verJugadores(teamId:number){
    this.teamPlayers.length=0;
    this.ok=true;
    this.teamService.getTeam(teamId).subscribe({
      next: (team:Team)=>{
        this.team = team;

       
        team.players.forEach(playerId=>{
          this.playerService.getPlayer(playerId).subscribe({
            next:(player:Player)=>{
              this.teamPlayers.push(player)
              this.teamPlayers = this.teamPlayers.sort((a, b)=>a.position.localeCompare(b.position) || a.name.localeCompare(b.name))
            }
          })
        })
        

      }
    })
  };

  }
