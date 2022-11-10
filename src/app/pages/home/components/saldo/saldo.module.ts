import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaldoRoutingModule } from './saldo-routing.module';
import { SaldoComponent } from './saldo.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    SaldoComponent
  ],
  imports: [
    CommonModule,
    SaldoRoutingModule,
    SharedModule
  ]
})
export class SaldoModule { }
