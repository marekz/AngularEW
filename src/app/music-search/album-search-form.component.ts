import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'app-album-search-form',
  template: `
    <form (ngSubmit)="search(query)">
      <div class="input-group">
        <input type="text" name="query" [(ngModel)]="query"  class="form-control" placeholder="Słowa kluczowe" />
        <span class="input-group-btn">
          <button type="submit" class="btn bt-outline-primary">Szukaj</button>
        </span>
      </div>
    </form>
  `,
  styles: []
})
export class AlbumSearchFormComponent implements OnInit {

  constructor(private musicSearch:MusicSearchService) { }

  ngOnInit() {
  }

  search(query){
    this.musicSearch.search(query)
  }

}
