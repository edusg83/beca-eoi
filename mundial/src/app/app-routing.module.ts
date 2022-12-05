import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsDashboardComponent } from './teams/components/teams-dashboard/teams-dashboard.component';


const routes: Routes = [
  {
    path:"goToTeams",
    loadChildren: ()=> import('./teams/teams-module/teams-module.module').then(m=>m.TeamsModuleModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
