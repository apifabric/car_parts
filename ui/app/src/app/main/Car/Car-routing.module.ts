import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarHomeComponent } from './home/Car-home.component';
import { CarNewComponent } from './new/Car-new.component';
import { CarDetailComponent } from './detail/Car-detail.component';

const routes: Routes = [
  {path: '', component: CarHomeComponent},
  { path: 'new', component: CarNewComponent },
  { path: ':id', component: CarDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Car-detail-permissions'
      }
    }
  },{
    path: ':car_id/CarPart', loadChildren: () => import('../CarPart/CarPart.module').then(m => m.CarPartModule),
    data: {
        oPermission: {
            permissionId: 'CarPart-detail-permissions'
        }
    }
}
];

export const CAR_MODULE_DECLARATIONS = [
    CarHomeComponent,
    CarNewComponent,
    CarDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }