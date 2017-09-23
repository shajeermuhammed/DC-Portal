import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './admin/home/home.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    // otherwise redirect to unauthorized-access page
	{ path: '**', redirectTo: '/dashboard' },
];

export const Routing = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });