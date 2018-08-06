import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  albums = [];

  albumsStream = new Subject();

  constructor(private http: Http) {
    
  }

  getAlbumsStream(){
    return Observable.from(this.albumsStream)
  }

  search(query){
    let url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

    this.http.get(url).subscribe((response:Response)=>{
      let data = response.json();
      let albums = data.albums.items;
      this.albums = albums;

      this.albumsStream.next(this.albums);
    })
  }
}
