import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WAREHOUSEPART_MODULE_DECLARATIONS, WarehousePartRoutingModule} from  './WarehousePart-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WarehousePartRoutingModule
  ],
  declarations: WAREHOUSEPART_MODULE_DECLARATIONS,
  exports: WAREHOUSEPART_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WarehousePartModule { }