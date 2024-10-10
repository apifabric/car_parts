import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CARPART_MODULE_DECLARATIONS, CarPartRoutingModule} from  './CarPart-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CarPartRoutingModule
  ],
  declarations: CARPART_MODULE_DECLARATIONS,
  exports: CARPART_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarPartModule { }