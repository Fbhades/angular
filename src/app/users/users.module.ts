import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { FormsModule } from '@angular/forms';

import { CandidateComponent } from './candidate/candidate.component';
import { DetailComponent } from './details/details.component';

@NgModule({
  declarations: [
    CandidateComponent,
    DetailComponent, 
  ],
  imports: [
    CommonModule,
    PublicModule,
    FormsModule,
  ]
})
export class UsersModule { }
