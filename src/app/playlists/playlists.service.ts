import { Injectable, Inject, Optional } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Observable } from 'rxjs';

export interface Playlist {
  name: string,
  tracks: any[],
  color: string,
  favourite: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  server_url = 'http://localhost:3000/playlists/';

  constructor(private http:Http) {

  }

  playlists = [
  ]

  getPlaylistLists(){
    return this.playlists;
  }

  getPlaylists(){
    return this.http.get(this.server_url)
          .map( response => response.json() )
          .subscribe( playlists => {
            this.playlists = playlists;
            this.playlistStream$.next(this.playlists)
          });
  }

  playlistStream$ = new Subject<Playlist[]>();

  getPlaylistStream(){
    if(!this.playlists.length){
      this.getPlaylists()
    }
    return this.playlistStream$.startWith(this.playlists);
  }

  savePLaylist(playlist){
    let request;
    if(playlist.id) {
      request = this.http.put(this.server_url + playlist.id, playlist)
    } else {
      request = this.http.put(this.server_url, playlist)
    }

    return request.map(response => response.json())
      .do( playlist => {
        this.getPlaylists()
      })
  }

  createPlaylist(): Playlist {
    return {
      name: '',
      tracks: [],
      color: '#FF0000',
      favourite: false
    };
  }

  getPlaylist(id){
    return this.http.get(this.server_url + id)
      .map(response => response.json())
  }
}
