import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ComponentsModule
  ]
})
export class WelcomeModule { }
