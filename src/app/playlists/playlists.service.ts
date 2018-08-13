import { Injectable, Inject, Optional } from '@angular/core';
import playlistsData from './playlists.data';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(@Optional() @Inject('PlaylistsData') playlistsData) {
    console.log('PlaylistsService', this);
    this.playlists = playlistsData == null? this.playlists : playlistsData;
   }

  playlists = [
  ]

  getPlaylistLists(){
    return this.playlists;
  }

  getPlaylist(id){
    return this.playlists.find(playlist => playlist.id === id);
  }

  savePLaylist(playlist){
    if(playlist.id) {
      let index = this.playlists.findIndex((old_playlist)=>(
        old_playlist.id === playlist.id
      ))
      this.playlists.splice(index, 1, playlist)

    } else {
      playlist.id = Date.now()
      this.playlists.push(playlist);
    }
  }

  createPlaylist(){
    var newPlayList = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favorite: false
    };

    return Object.assign({}, newPlayList);
  }
}
