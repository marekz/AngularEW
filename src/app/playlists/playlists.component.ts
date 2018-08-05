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

  constructor(private playlistService:PlaylistsService) {
  }
 
  ngOnInit(): void {
    this.playlists = this.playlistService.getPlaylistLists();
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
    let newPlayList = this.playlistService.createPlaylist();
    this.selected = newPlayList;
    this.edited = Object.assign({},newPlayList);
  }

  save(playlist){
    this.playlistService.savePLaylist(playlist);
  }
}
