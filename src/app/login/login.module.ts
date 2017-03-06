import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [ ]
})
export class LoginModule {

}
