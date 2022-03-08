import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule, 
  ]
})
export class MainModule { }
