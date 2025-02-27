import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SupplierPart-new',
  templateUrl: './SupplierPart-new.component.html',
  styleUrls: ['./SupplierPart-new.component.scss']
})
export class SupplierPartNewComponent {
  @ViewChild("SupplierPartForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}