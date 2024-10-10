import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CarPart-new',
  templateUrl: './CarPart-new.component.html',
  styleUrls: ['./CarPart-new.component.scss']
})
export class CarPartNewComponent {
  @ViewChild("CarPartForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}