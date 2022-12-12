import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerToTeamComponent } from '../components/add-player-to-team/add-player-to-team.component';
import { DeleteTeamComponent } from '../components/delete-team/delete-team.component';
import { GetTeamComponent } from '../components/get-team/get-team.component';
import { GetTeamsComponent } from '../components/get-teams/get-teams.component';
import { PostTeamComponent } from '../components/post-team/post-team.component';
import { PutTeamComponent } from '../components/put-team/put-team.component';
import { TeamsDashboardComponent } from '../components/teams-dashboard/teams-dashboard.component';

const routes: Routes = [
  {
    path:'', component:TeamsDashboardComponent,
    children:[
      {
        path:'get-teams', component:GetTeamsComponent
      },
      {
        path:'get-team', component:GetTeamComponent
      },
      {
        path:'post-team', component:PostTeamComponent
      },
      {
        path:'put-team', component:PutTeamComponent
      },
      {
        path:'add-player-to-team', component:AddPlayerToTeamComponent
      },
      {
        path:'delete-team', component:DeleteTeamComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsModuleRoutingModule { }
