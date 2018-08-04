import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-detail',
  template: `
    <p class="card-text">Wybrana Playlista</p>
    <div class="form-group">
      <button class="btn btn-success flat-xs-right" (click)="edit(playlist)">Edytuj</button>
    </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  @Input()
  playlist;

  @Output('editplaylist')
  emiter = new EventEmitter()

  edit(playlist){
    this.emiter.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
