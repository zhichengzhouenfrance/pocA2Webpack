import './vendor.ts';

import { NgModule }       from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Router } from '@angular/router';

import { AsapMainComponent }  from './layouts/main/main.app.component';
import { LayoutRoutingModule } from './layouts/layout-routing.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.route';

@NgModule({
  imports:      [
      BrowserModule,
      RouterModule,
      FormsModule,
      LayoutRoutingModule,
      LoginModule,
      AppRoutingModule
  ],
  declarations: [
      AsapMainComponent
  ],
  bootstrap:    [ AsapMainComponent ]
})
export class AppModule { }
