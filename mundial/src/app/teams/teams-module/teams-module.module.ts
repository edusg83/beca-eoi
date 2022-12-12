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
import { TeamsService } from 'src/app/services/teams.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlayerToTeamComponent } from '../components/add-player-to-team/add-player-to-team.component';


@NgModule({
  declarations: [
    DeleteTeamComponent,
    TeamsDashboardComponent,
    GetTeamComponent,
    GetTeamsComponent,
    PostTeamComponent,
    PutTeamComponent,
    AddPlayerToTeamComponent
  ],
  imports: [
    CommonModule,
    TeamsModuleRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeamsModuleModule { }
