import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http'; 
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Witaj w kursie';

  constructor(private http:Http, private auth:AuthService){
    this.http.get('https://api.spotify.com/v1/search?type=album&query=metallica').subscribe( response => {
      // console.log(response.json)
    })
  }
}
