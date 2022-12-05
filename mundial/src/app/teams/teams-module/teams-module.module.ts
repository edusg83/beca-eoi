import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsModuleRoutingModule } from './teams-module-routing.module';
import { DeleteTeamComponent } from '../components/delete-team/delete-team.component';
import { TeamsDashboardComponent } from '../components/teams-dashboard/teams-dashboard.component';
import { GetTeamComponent } from '../components/get-team/get-team.component';
import { GetTeamsComponent } from '../components/get-teams/get-teams.component';
import { PostTeamComponent } from '../components/post-team/post-team.component';
import { PutTeamComponent } from '../components/put-team/put-team.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DeleteTeamComponent,
    TeamsDashboardComponent,
    GetTeamComponent,
    GetTeamsComponent,
    PostTeamComponent,
    PutTeamComponent
  ],
  imports: [
    CommonModule,
    TeamsModuleRoutingModule,
    RouterModule
  ]
})
export class TeamsModuleModule { }
