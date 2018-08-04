import { Component, OnInit } from '@angular/core';

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
  
  playlists = [
    {
      id: 1,
      name: 'Angular greatest Hits!',
      tracks: 2,
      color: '#FF0000',
      favorite: true
    },
    {
      id: 2,
      name: 'The best of eduweb!',
      tracks: 23,
      color: '#0000FF',
      favorite: false
    }
  ]

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

  constructor() { }
  
  ngOnInit(): void {
  }
}
