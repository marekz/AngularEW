import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  albums = [];
  constructor(private http: Http) {
    
   }

  search(query, callback){
    let url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

    this.http.get(url).subscribe((response:Response)=>{
      let data = response.json()
      let albums = data.albums.items;
      this.albums = albums;
      callback(albums);
    })
  }

  getAlbums(callback){
    let query = 'ACDC'
    this.search(query, callback);
  }
}
