import { Component } from '@angular/core';
import { Skatepart } from './skate';
@Component({
  selector: 'skate-list',
  template: `
      <div   *ngFor="let skate of skateparts">
      <h2>{{skate.name}}  </h2>
       <p> {{skate.price | currency:'USD'}}</p>

    </div>`
})
export class SkateListComponent {
  skateparts = [
    new Skatepart(1, 20, 'Wheels'),
    new Skatepart(2, 50, 'Truck'),
    new Skatepart(3, 90, 'Deck'),
    new Skatepart(4, 120, 'Bearing')
  ];


}
