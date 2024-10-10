import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PartCategory-new',
  templateUrl: './PartCategory-new.component.html',
  styleUrls: ['./PartCategory-new.component.scss']
})
export class PartCategoryNewComponent {
  @ViewChild("PartCategoryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}