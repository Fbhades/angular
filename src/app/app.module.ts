import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PublicModule } from './public/public.module';
import { UsersModule } from './users/users.module';
import { PrivateModule } from './private/private.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UsersModule,
    PublicModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrivateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
