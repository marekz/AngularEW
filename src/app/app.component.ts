import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Witaj w kursie';

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

  constructor(){

  }
}
