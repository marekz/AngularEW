import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlaylistsModule } from './playlists/playlists.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { MusicSearchModule } from './music-search/music-search.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlaylistsModule,
    MusicSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private auth:AuthService){
    auth.getToken();
  }
}
