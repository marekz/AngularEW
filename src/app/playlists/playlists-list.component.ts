import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlists-list',
  template: `
  <table class="table table-striped">
    <thead>
      <tr>
        <th> # </th>
        <th> Nazwa </th>
        <th> Utwór </th>
        <th> Ulubiona </th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let playlist of playlists; let i = index"
        class="playlist-row" 
        [ngClass]="{'table-active': selected == playlist}" 
        [ngStyle]="{borderBottomColor:playlist.color}" 
        (click)="select(playlist)">
        <td> {{ i+1 }} </td>
        <td> {{ playlist.name }} </td>
        <td> {{ playlist.tracks }} </td>
        <td>
          <label>
            <input type="checkbox" [(ngModel)]="playlist.favorite" (click)="$event.stopPropagation()">
          </label>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter()


  @Input()
  playlists;

  @Input()
  selected;

  select(playlist){
    // console.log(playlist);
    this.onSelected.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
