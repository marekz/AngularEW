import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'app-album-list',
  template: `
  <h4>Albumy</h4>
  <div class="card-deck card-deck-justify">
    <app-album-card [album]="album" class="card" 
    [routerLink]="['album', album.id]"
    *ngFor="let album of albums | async "></app-album-card>
  </div>
  `,
  styles: [`
    .card-deck-justify {
      justify-content: space-between;
    }  
  `]
})
export class AlbumListComponent implements OnInit {

  albums;

  constructor(private musicSearch:MusicSearchService) { }

  ngOnInit() {
    this.albums = this.musicSearch.getAlbumsStream()
  }

}
