import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousePartHomeComponent } from './home/WarehousePart-home.component';
import { WarehousePartNewComponent } from './new/WarehousePart-new.component';
import { WarehousePartDetailComponent } from './detail/WarehousePart-detail.component';

const routes: Routes = [
  {path: '', component: WarehousePartHomeComponent},
  { path: 'new', component: WarehousePartNewComponent },
  { path: ':id', component: WarehousePartDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WarehousePart-detail-permissions'
      }
    }
  }
];

export const WAREHOUSEPART_MODULE_DECLARATIONS = [
    WarehousePartHomeComponent,
    WarehousePartNewComponent,
    WarehousePartDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousePartRoutingModule { }