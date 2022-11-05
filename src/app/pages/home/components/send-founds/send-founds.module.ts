import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendFoundsRoutingModule } from './send-founds-routing.module';
import { SendFoundsComponent } from './send-founds.component';


@NgModule({
  declarations: [
    SendFoundsComponent
  ],
  imports: [
    CommonModule,
    SendFoundsRoutingModule
  ]
})
export class SendFoundsModule { }
