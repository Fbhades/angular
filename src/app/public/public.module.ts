import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormationComponent } from './formation/formation.component';

import { AuthService } from './Service/service.service';
import { FormationService } from './Service/formation.service';
import { SessionService } from './Service/session.service';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent, 
    FormationComponent,
  ],
  providers:[
    AuthService,
    FormationService,
    SessionService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports :[
    HeaderComponent,
  ]
})
export class PublicModule { }
