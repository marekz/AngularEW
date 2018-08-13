import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlaylistsModule } from './playlists/playlists.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { MusicSearchModule } from './music-search/music-search.module';
import { RouterModule, Routes } from '@angular/router';

import { PlaylistsComponent } from './playlists/playlists.component';
import { MusicSearchComponent } from './music-search/music-search.component';

const routesConfig:Routes = [
  { path:'', component: PlaylistsComponent },
  { path:'music', component: MusicSearchComponent }
]

const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: true,
  useHash: true
});

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlaylistsModule,
    MusicSearchModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private auth:AuthService){
    auth.getToken();
  }
}
