import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Witaj w kursie';

  selected = null;
  
  playlist = {
    name: 'The best of eduweb!',
    tracks: 23,
    color: '#FF0000',
    favorite: true
  }

  // getPlaylistStyle(playlist){
  //   return {
  //     borderBottomColor: playlist.color,
  //     borderBottomWidth: '2px'
  //   }
  // }

  save(event){
    console.log('Zapisano', event);
  }

  constructor(){

  }
}
