import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  
  ngOnInit(): void {
  }

  selected = null;

  edited = {   
  }

  mode = "none";
  
  playlists = [
    {
      name: 'The best of eduweb!',
      tracks: 23,
      color: '#0000FF',
      favorite: false
    },
    {
      name: 'Angular greatest Hits!',
      tracks: 2,
      color: '#FF0000',
      favorite: true
    }
  ]

  constructor() { }

  select(playlist){
    if(playlist !== this.selected)
    this.mode = "selected"
    this.selected = playlist;
  }

  save(event){
    console.log('Zapisano', event);
  }

  edit(playlist){
    this.mode = "edit";
    this.edited = playlist;
    this.selected = playlist;
  }

  createNew(){
    this.mode = "edit";
    var newPlayList = {};
    this.selected = newPlayList;
    this.edited = newPlayList;
  }
}
