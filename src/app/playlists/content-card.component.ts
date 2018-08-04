import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  template: `
  <div class="card">
    <div class="card-block">
      <h4 class="card-title">{{title}}</h4>
      <p class="card-text">{{text}}</p>
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: [`
    h4 {
      color: red;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated,
  // inputs: [
  //   'title',
  //   'text:content'
  // ]
})
export class ContentCardComponent implements OnInit {

  @Input()
  title = '';

  @Input('content')
  text = '';

  constructor() { }

  ngOnInit() {
  }

}
