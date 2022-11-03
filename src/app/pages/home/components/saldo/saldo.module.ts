import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaldoRoutingModule } from './saldo-routing.module';
import { SaldoComponent } from './saldo.component';


@NgModule({
  declarations: [
    SaldoComponent
  ],
  imports: [
    CommonModule,
    SaldoRoutingModule
  ]
})
export class SaldoModule { }
