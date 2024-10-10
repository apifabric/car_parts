import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SupplierPart-card.component.html',
  styleUrls: ['./SupplierPart-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SupplierPart-card]': 'true'
  }
})

export class SupplierPartCardComponent {


}