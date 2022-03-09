import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class MainModule { }
