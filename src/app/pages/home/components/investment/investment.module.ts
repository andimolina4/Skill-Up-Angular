import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentComponent } from './investment.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [InvestmentComponent],
  imports: [CommonModule, InvestmentRoutingModule, MaterialModule],
})
export class InvestmentModule {}
