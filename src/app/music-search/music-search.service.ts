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
    this.search('batman');
  }

  getAlbumsStream(){
    return Observable
      .from(this.albumsStream)
      .startWith(this.albums)

  }

  getAlbum(id){
    let url = `https://api.spotify.com/v1/albums/${id}`;
    return this.http.get(url)
      .map((response:Response)=> response.json());
  }

  search(query){
    let url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

    this.http.get(url)
    .map((response:Response)=>{
      let data = response.json();
      return data.albums.items;
    })
    .do(albums => { this.albums = albums })
    .subscribe(albums=>{
      this.albumsStream.next(this.albums);
    })
  }
}
