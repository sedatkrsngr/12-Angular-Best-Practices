import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
