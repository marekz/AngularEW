import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  template: `
  <h4>Albumy</h4>
  <div class=card-deck>
    <app-album-card [album]="album" class="card" *ngFor="let album of albums"></app-album-card>
  </div>
    
  `,
  styles: []
})
export class AlbumListComponent implements OnInit {

  albums = [
    {
      name:'Album 1',
      images:[
        {
          url:'http://placehold.it/640x640'
        }
      ]
    },{
      name:'Album 2',
      images:[
        {
          url:'http://placehold.it/640x640'
        }
      ]
    },{
      name:'Album 3',
      images:[
        {
          url:'http://placehold.it/640x640'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
