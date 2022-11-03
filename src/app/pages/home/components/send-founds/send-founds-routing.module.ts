import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendFoundsComponent } from './send-founds.component';

const routes: Routes = [{ path: '', component: SendFoundsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendFoundsRoutingModule { }
