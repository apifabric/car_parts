import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CarPart-card.component.html',
  styleUrls: ['./CarPart-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CarPart-card]': 'true'
  }
})

export class CarPartCardComponent {


}