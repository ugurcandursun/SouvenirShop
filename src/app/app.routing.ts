
import {RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeListComponent } from './component/employee/employeeList/employeeList.component';
import { ManComponent } from './component/categories/man/man.component';
import { WomanComponent } from './component/categories/woman/woman.component';
import { HomeLifeComponent } from './component/categories/home-life/home-life.component';
import { ChildComponent } from './component/categories/child/child.component';
import { CosmeticComponent } from './component/categories/cosmetic/cosmetic.component';
import { ElectronicComponent } from './component/categories/electronic/electronic.component';
import { ShoeBagComponent } from './component/categories/shoe-bag/shoe-bag.component';
import { HomeComponent } from './component/home/home.component';
import { ProductinfoComponent } from './component/productinfo/productinfo.component';
import { WatchesAccessoriesComponent } from './component/categories/watches-accessories/watches-accessories.component';
import { RegisterComponent } from './component/authencation/register/register.component';
import { LoginComponent } from './component/authencation/login/login.component';

const APP_ROUTES: Routes = [
    
    {path: 'create', component: EmployeeComponent },
    {path:'',component:HomeComponent},
    {path:"list",component:EmployeeListComponent},
    {path:"man",component:ManComponent},
    {path:"woman",component:WomanComponent},
    {path:"homelife",component:HomeLifeComponent},
    {path:"child",component:ChildComponent},
    {path:"cosmetic",component:CosmeticComponent},
    {path:"electronic",component:ElectronicComponent},
    {path:"shoebag",component:ShoeBagComponent},
    {path:"watchesaccessories",component:WatchesAccessoriesComponent},
    {path:"productinfo",component:ProductinfoComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent}

    
  
   
    
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRouting {

}