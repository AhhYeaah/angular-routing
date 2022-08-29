import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonExpComponent } from './button-exp/button-exp.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ButtonExpComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent
  ]

})
export class SidebarModule { }
