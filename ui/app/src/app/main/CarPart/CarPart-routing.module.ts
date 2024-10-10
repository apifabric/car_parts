import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPartHomeComponent } from './home/CarPart-home.component';
import { CarPartNewComponent } from './new/CarPart-new.component';
import { CarPartDetailComponent } from './detail/CarPart-detail.component';

const routes: Routes = [
  {path: '', component: CarPartHomeComponent},
  { path: 'new', component: CarPartNewComponent },
  { path: ':id', component: CarPartDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CarPart-detail-permissions'
      }
    }
  }
];

export const CARPART_MODULE_DECLARATIONS = [
    CarPartHomeComponent,
    CarPartNewComponent,
    CarPartDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarPartRoutingModule { }