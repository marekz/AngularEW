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
  
  playlist = {
    name: 'The best of eduweb!',
    tracks: 23,
    color: '#FF0000',
    favorite: true
  }

  select(playlist){
    this.selected = playlist;
    this.mode = "selected";
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
