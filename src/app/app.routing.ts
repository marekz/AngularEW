import { RouterModule, Routes } from '@angular/router';

import { PlaylistsComponent } from './playlists/playlists.component';

const routesConfig:Routes = [
  { path:'', redirectTo: 'music', pathMatch:'full' },
  { path:'**', redirectTo: 'music', pathMatch:'full' }
]

export const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: true,
  useHash: true
});