import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'app-album-list',
  template: `
  <h4>Albumy</h4>
  <div class=card-deck>
    <app-album-card [album]="album" class="card" *ngFor="let album of albums"></app-album-card>
  </div>
    
  `,
  styles: []
})
export class AlbumListComponent implements OnInit {

  albums = [];

  constructor(private musicSearch:MusicSearchService) { }

  ngOnInit() {
    this.musicSearch.getAlbums((albums)=>{
      this.albums = albums
    });
    
  }

}
