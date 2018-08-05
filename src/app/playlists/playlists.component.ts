import { Component, OnInit, Inject } from '@angular/core';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  selected = null;

  edited = {   
  }

  mode = "none";
  
  playlists = []

  // playlistService:PlaylistsService;

  constructor(private playlistService:PlaylistsService) {
    // this.playlistService = new PlaylistsService();
    this.playlists = this.playlistService.getPlaylistLists();
  }
 
  ngOnInit(): void {
  }

  select(playlist){
    if(playlist !== this.selected)
    this.mode = "selected"
    this.selected = playlist;
  }

  edit(playlist){
    this.mode = "edit";
    this.edited = Object.assign({},playlist);
    this.selected = playlist;
  }

  createNew(){
    this.mode = "edit";
    var newPlayList = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favorite: false
    };
    this.selected = newPlayList;
    this.edited = Object.assign({},newPlayList);
  }

  save(playlist){
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
}
