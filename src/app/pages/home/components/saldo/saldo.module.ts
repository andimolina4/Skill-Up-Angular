import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaldoRoutingModule } from './saldo-routing.module';
import { SaldoComponent } from './saldo.component';
import { SharedModule } from '@app/shared/shared.module';
import { EditSaldoComponent } from './edit-saldo/edit-saldo.component';
import { MaterialModule } from '@app/material/material.module';


@NgModule({
  declarations: [
    SaldoComponent,
    EditSaldoComponent
  ],
  imports: [
    CommonModule,
    SaldoRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SaldoModule { }
