import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TagModule,
    InputTextModule,
    PanelMenuModule,
    TabMenuModule,
    ButtonModule,
    TableModule,
    ToastModule
  ]
})
export class PrimengModule { }
