import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistsService, Playlist } from './playlists.service';

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
        [routerLink]="[playlist.id]">
        <td> {{ i+1 }} </td>
        <td> {{ playlist.name }} </td>
        <td> {{ playlist.tracks.length }} </td>
        <td>
          <label>
            <input type="checkbox" [(ngModel)]="playlist.favorite" (click)="$event.stopPropagation()">
          </label>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: [`
    .playlist-row {
      border-bottom: 2px solid transparent; 
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

  constructor(private playlistService:PlaylistsService) { }

  playlists = [];

  ngOnInit() {
    this.playlistService.getPlaylistStream()
    .subscribe((playlists:Playlist[]) => {
      this.playlists = playlists;
    })
  }

}
