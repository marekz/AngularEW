import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-detail',
  template: `
  <div class="card">
    <div class="card-block">
      <h4 class="card-title">Playlista "{{selected.name}}"</h4>
      <p class="card-text">Wybrana Playlista</p>
      <div class="form-group">
        <button class="btn btn-success flat-xs-right" (click)="edit(selected)">Edytuj</button>
      </div>
    </div>
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
