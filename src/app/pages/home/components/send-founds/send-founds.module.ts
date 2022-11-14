import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendFoundsRoutingModule } from './send-founds-routing.module';
import { SendFoundsComponent } from './send-founds.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/material/material.module';


@NgModule({
  declarations: [
    SendFoundsComponent
  ],
  imports: [
    CommonModule,
    SendFoundsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SendFoundsModule { }
