import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
