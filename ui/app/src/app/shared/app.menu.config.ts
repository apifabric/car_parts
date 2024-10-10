import { MenuRootItem } from 'ontimize-web-ngx';

import { CarCardComponent } from './Car-card/Car-card.component';

import { CarModelCardComponent } from './CarModel-card/CarModel-card.component';

import { CarPartCardComponent } from './CarPart-card/CarPart-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { ManufacturerCardComponent } from './Manufacturer-card/Manufacturer-card.component';

import { OrderCardComponent } from './Order-card/Order-card.component';

import { OrderDetailCardComponent } from './OrderDetail-card/OrderDetail-card.component';

import { PartCardComponent } from './Part-card/Part-card.component';

import { PartCategoryCardComponent } from './PartCategory-card/PartCategory-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';

import { SupplierPartCardComponent } from './SupplierPart-card/SupplierPart-card.component';

import { WarehouseCardComponent } from './Warehouse-card/Warehouse-card.component';

import { WarehousePartCardComponent } from './WarehousePart-card/WarehousePart-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Car', name: 'CAR', icon: 'view_list', route: '/main/Car' }
    
        ,{ id: 'CarModel', name: 'CARMODEL', icon: 'view_list', route: '/main/CarModel' }
    
        ,{ id: 'CarPart', name: 'CARPART', icon: 'view_list', route: '/main/CarPart' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'Manufacturer', name: 'MANUFACTURER', icon: 'view_list', route: '/main/Manufacturer' }
    
        ,{ id: 'Order', name: 'ORDER', icon: 'view_list', route: '/main/Order' }
    
        ,{ id: 'OrderDetail', name: 'ORDERDETAIL', icon: 'view_list', route: '/main/OrderDetail' }
    
        ,{ id: 'Part', name: 'PART', icon: 'view_list', route: '/main/Part' }
    
        ,{ id: 'PartCategory', name: 'PARTCATEGORY', icon: 'view_list', route: '/main/PartCategory' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
        ,{ id: 'SupplierPart', name: 'SUPPLIERPART', icon: 'view_list', route: '/main/SupplierPart' }
    
        ,{ id: 'Warehouse', name: 'WAREHOUSE', icon: 'view_list', route: '/main/Warehouse' }
    
        ,{ id: 'WarehousePart', name: 'WAREHOUSEPART', icon: 'view_list', route: '/main/WarehousePart' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CarCardComponent

    ,CarModelCardComponent

    ,CarPartCardComponent

    ,CustomerCardComponent

    ,ManufacturerCardComponent

    ,OrderCardComponent

    ,OrderDetailCardComponent

    ,PartCardComponent

    ,PartCategoryCardComponent

    ,SupplierCardComponent

    ,SupplierPartCardComponent

    ,WarehouseCardComponent

    ,WarehousePartCardComponent

];