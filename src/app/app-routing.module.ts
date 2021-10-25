import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { DiaplayDataComponent } from './diaplay-data/diaplay-data.component';

const routes: Routes = [
  {path:'',redirectTo:'Registration',pathMatch:'full'},
  {path:'Registration',component:CustomerregistrationComponent},
  {path:'DisplayData',component:DiaplayDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
