import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './gastos.component';
import { SharedModule } from '@app/shared/shared.module';
import { EditGastosComponent } from './edit-gastos/edit-gastos.component';
import { MaterialModule } from '@app/material/material.module';


@NgModule({
  declarations: [
    GastosComponent,
    EditGastosComponent
  ],
  imports: [
    CommonModule,
    GastosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class GastosModule { }
