import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }    from './login.component';

export const LOGIN_ROUTE: Routes = [{
    path: 'login',
    component: LoginComponent
}];


@NgModule({
    imports: [
        RouterModule.forRoot(LOGIN_ROUTE)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule { }
