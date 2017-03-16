import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { PageNotFoundComponent }    from './not-found.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: 'login.module#LoginRoutingModule'
    },
    //{
    //    path: 'compose',
    //    component: ComposeMessageComponent,
    //    outlet: 'popup'
    //},
    //{
    //    path: 'admin',
    //    loadChildren: 'app/admin/admin.module#AdminModule',
    //    canLoad: [AuthGuard]
    //},
    //{
    //    path: 'crisis-center',
    //    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    //    data: { preload: true }
    //},
    //{ path: '',   redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', loadChildren: 'login.module#LoginRoutingModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { preloadingStrategy: SelectivePreloadingStrategy }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }
