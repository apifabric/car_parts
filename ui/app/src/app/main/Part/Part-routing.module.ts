import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartHomeComponent } from './home/Part-home.component';
import { PartNewComponent } from './new/Part-new.component';
import { PartDetailComponent } from './detail/Part-detail.component';

const routes: Routes = [
  {path: '', component: PartHomeComponent},
  { path: 'new', component: PartNewComponent },
  { path: ':id', component: PartDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Part-detail-permissions'
      }
    }
  },{
    path: ':part_id/CarPart', loadChildren: () => import('../CarPart/CarPart.module').then(m => m.CarPartModule),
    data: {
        oPermission: {
            permissionId: 'CarPart-detail-permissions'
        }
    }
},{
    path: ':part_id/OrderDetail', loadChildren: () => import('../OrderDetail/OrderDetail.module').then(m => m.OrderDetailModule),
    data: {
        oPermission: {
            permissionId: 'OrderDetail-detail-permissions'
        }
    }
},{
    path: ':part_id/SupplierPart', loadChildren: () => import('../SupplierPart/SupplierPart.module').then(m => m.SupplierPartModule),
    data: {
        oPermission: {
            permissionId: 'SupplierPart-detail-permissions'
        }
    }
},{
    path: ':part_id/WarehousePart', loadChildren: () => import('../WarehousePart/WarehousePart.module').then(m => m.WarehousePartModule),
    data: {
        oPermission: {
            permissionId: 'WarehousePart-detail-permissions'
        }
    }
}
];

export const PART_MODULE_DECLARATIONS = [
    PartHomeComponent,
    PartNewComponent,
    PartDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartRoutingModule { }