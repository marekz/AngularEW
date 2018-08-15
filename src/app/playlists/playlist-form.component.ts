import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistsService } from './playlists.service'

@Component({
  selector: 'app-playlist-form',
  template: `
    <div *ngIf="playlist">
      <form #formRef="ngForm" novalidate="true" (ngSubmit)="save(formRef.valid, playlist)">
        <div class="form-group">
          <label>Name: </label>
          <input type="text" #nameRef="ngModel" required minlength="3" [(ngModel)]="playlist.name" name="name"class="form-control">
          <div class="has-danger" *ngIf="nameRef.touched || nameRef.dirty || formRef.submitted">
            <div class="form-control-feedback" 
                  *ngIf="nameRef.errors?.required">
                  To pole jest wymagane
            </div>
            <div class="form-control-feedback" 
                  *ngIf="nameRef.errors?.minlength">
                  To pole musi mieć przynajmniej {{ nameRef.errors.minlength.requiredLength }} znaki
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Opis</label>
          <textarea #descriptionRef="ngModel" [(ngModel)]="playlist.description" name="description" class="form-control" max-lengrth="200"></textarea>
        </div>
        <div class="form-group">
          <label>Color: </label>
          <input type="color" class="form-control" [(ngModel)]="playlist.color" name="color">
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" [(ngModel)]="playlist.favourite" name="favourite"> Favourite: </label>
        </div>
        <div class="form-group">
          <button class="btn btn-success flat-xs-right" type="submit">Zapisz</button>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  save(valid, playlist){
    if(!valid) {
      return
    }
    // this.playlistsService.savePLaylist(playlist);
    // this.router.navigate(['playlist', playlist.id]);
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
