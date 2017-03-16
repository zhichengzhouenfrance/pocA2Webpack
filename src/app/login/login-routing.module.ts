import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }    from './login.component';

export const LOGIN_ROUTE: Routes = [{
    path: '',
    component: LoginComponent
}];


@NgModule({
    imports: [
        RouterModule.forChild(LOGIN_ROUTE)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule { }
