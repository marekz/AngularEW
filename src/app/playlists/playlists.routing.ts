import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistDetailComponent } from './playlist-detail.component';

const routesConfig:Routes = [
    { path:'playlist', component: PlaylistsComponent,
        children: [
            { path:'', component: PlaylistDetailComponent },
            { path:':id', component: PlaylistDetailComponent }
        ]},
    ]

export const routerModule = RouterModule.forChild(routesConfig);