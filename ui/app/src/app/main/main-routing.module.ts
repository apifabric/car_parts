import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Car', loadChildren: () => import('./Car/Car.module').then(m => m.CarModule) },
    
        { path: 'CarModel', loadChildren: () => import('./CarModel/CarModel.module').then(m => m.CarModelModule) },
    
        { path: 'CarPart', loadChildren: () => import('./CarPart/CarPart.module').then(m => m.CarPartModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'Manufacturer', loadChildren: () => import('./Manufacturer/Manufacturer.module').then(m => m.ManufacturerModule) },
    
        { path: 'Order', loadChildren: () => import('./Order/Order.module').then(m => m.OrderModule) },
    
        { path: 'OrderDetail', loadChildren: () => import('./OrderDetail/OrderDetail.module').then(m => m.OrderDetailModule) },
    
        { path: 'Part', loadChildren: () => import('./Part/Part.module').then(m => m.PartModule) },
    
        { path: 'PartCategory', loadChildren: () => import('./PartCategory/PartCategory.module').then(m => m.PartCategoryModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
        { path: 'SupplierPart', loadChildren: () => import('./SupplierPart/SupplierPart.module').then(m => m.SupplierPartModule) },
    
        { path: 'Warehouse', loadChildren: () => import('./Warehouse/Warehouse.module').then(m => m.WarehouseModule) },
    
        { path: 'WarehousePart', loadChildren: () => import('./WarehousePart/WarehousePart.module').then(m => m.WarehousePartModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }