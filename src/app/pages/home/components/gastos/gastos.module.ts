import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './gastos.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    GastosComponent
  ],
  imports: [
    CommonModule,
    GastosRoutingModule,
    SharedModule
  ]
})
export class GastosModule { }
