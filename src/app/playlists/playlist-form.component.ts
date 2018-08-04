import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  template: `
    <div>
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
        <button class="btn btn-success flat-xs-right" (click)="save($event)">Zapisz</button>
      </div>
    </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {
  @Input()
  playlist;

  constructor() { }

  ngOnInit() {
  }

}
