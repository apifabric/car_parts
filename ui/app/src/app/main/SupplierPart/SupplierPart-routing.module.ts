import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierPartHomeComponent } from './home/SupplierPart-home.component';
import { SupplierPartNewComponent } from './new/SupplierPart-new.component';
import { SupplierPartDetailComponent } from './detail/SupplierPart-detail.component';

const routes: Routes = [
  {path: '', component: SupplierPartHomeComponent},
  { path: 'new', component: SupplierPartNewComponent },
  { path: ':id', component: SupplierPartDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SupplierPart-detail-permissions'
      }
    }
  }
];

export const SUPPLIERPART_MODULE_DECLARATIONS = [
    SupplierPartHomeComponent,
    SupplierPartNewComponent,
    SupplierPartDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierPartRoutingModule { }