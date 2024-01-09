import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicModule } from '../public/public.module';

import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    PublicModule,
    FormsModule,
  ]
})
export class PrivateModule { }
