import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistsService } from './playlists.service'

@Component({
  selector: 'app-playlist-form',
  template: `
    <div *ngIf="playlist">
      <div class="form-group">
        <label>Name: </label>
        <input type="text" [(ngModel)]="playlist.name" class="form-control">
      </div>
      <div class="form-group">
        <label>Tracks: </label>
        <input type="string" [value]="playlist.tracks + ' utworów'" [readOnly]="true" class="form-control">
      </div>
      <div class="form-group">
        <label>Color: </label>
        <input type="color" class="form-control" [(ngModel)]="playlist.color">
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" [(ngModel)]="playlist.favourite"> Favourite: </label>
      </div>
      <div class="form-group">
        <button class="btn btn-success flat-xs-right" 
          (click)="save(playlist)">Zapisz</button>
      </div>
    </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  save(playlist){
    this.playlistsService.savePLaylist(playlist);
    this.router.navigate(['playlist', playlist.id]);
  }

  constructor(private activeRoute:ActivatedRoute,
    private playlistsService: PlaylistsService,
    private router:Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if(id){
        let playlist = this.playlistsService.getPlaylist(id);
        this.playlist = Object.assign({},playlist);
      } else {
        this.playlist = this.playlistsService.createPlaylist();
      }
    })
  }
}
