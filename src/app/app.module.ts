import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';  
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { DiaplayDataComponent } from './diaplay-data/diaplay-data.component';  
import { ActivateGuard } from './activate.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerregistrationComponent,
    DiaplayDataComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [  
    ActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
