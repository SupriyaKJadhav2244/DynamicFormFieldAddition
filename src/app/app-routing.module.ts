import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ActivateGuard } from './activate.guard';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { DiaplayDataComponent } from './diaplay-data/diaplay-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'Registration',pathMatch:'full'},
  {path:'Registration',component:CustomerregistrationComponent},
  {path:'DisplayData',component:DiaplayDataComponent,canActivate:[ActivateGuard]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
