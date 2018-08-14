import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistsService } from './playlists.service'

@Component({
  selector: 'app-playlist-detail',
  template: `
  <div *ngIf="!playlist">
    <p>Wybierz <b>playlistę</b>!</p>
  </div>
  <div *ngIf="playlist">
    <h3 class="card-title">{{ playlist.name }}</h3>
    <div class="form-group">
      <button class="btn btn-default flat-xs-right" (click)="edit(playlist)">Edytuj</button>
    </div>
  </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  playlist;

  @Output('editplaylist')
  emiter = new EventEmitter()

  edit(playlist){
    this.emiter.emit(playlist);
  }

  constructor(private activeRoute:ActivatedRoute,
              private playlistsService: PlaylistsService ) {

    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if(id){
        this.playlist = this.playlistsService.getPlaylist(id)
      }
    })
  }

  ngOnInit() {
  }

}
