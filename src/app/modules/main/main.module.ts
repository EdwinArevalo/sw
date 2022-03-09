import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule
  ]
})
export class MainModule { }
