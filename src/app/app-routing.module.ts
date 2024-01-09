import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import {FormationComponent} from './public/formation/formation.component'
import { DetailComponent } from './users/details/details.component';
import {LoginComponent} from './public/login/login.component';
import {CandidateComponent} from './users/candidate/candidate.component';
import { AdminComponent } from './private/admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : 'Home' , component : HomeComponent},
  {path : 'Formation' , component : FormationComponent},
  {path : 'formations/:id', component: DetailComponent},
  {path : 'login' , component :LoginComponent},
  {path : 'candidat' , component : CandidateComponent },
  {path:'admin', component:AdminComponent ,canActivate: [AuthGuard],data: { expectedRole: 'admin' }},
  {path : '**' , component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
