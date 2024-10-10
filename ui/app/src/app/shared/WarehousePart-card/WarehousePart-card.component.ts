import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WarehousePart-card.component.html',
  styleUrls: ['./WarehousePart-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WarehousePart-card]': 'true'
  }
})

export class WarehousePartCardComponent {


}