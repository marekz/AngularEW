import { RouterModule, Routes } from '@angular/router';

import { MusicSearchComponent } from './music-search.component';

const routesConfig:Routes = [
    { path:'music', component: MusicSearchComponent }
]

export const routerModule = RouterModule.forChild(routesConfig);