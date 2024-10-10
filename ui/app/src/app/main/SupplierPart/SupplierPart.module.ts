import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SUPPLIERPART_MODULE_DECLARATIONS, SupplierPartRoutingModule} from  './SupplierPart-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SupplierPartRoutingModule
  ],
  declarations: SUPPLIERPART_MODULE_DECLARATIONS,
  exports: SUPPLIERPART_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SupplierPartModule { }