import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
    { path: 'login', component:  LoginComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // other imports here
    ]
})
export class LayoutRoutingModule {}
