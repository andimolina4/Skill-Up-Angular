import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGastosComponent } from './edit-gastos/edit-gastos.component';
import { GastosComponent } from './gastos.component';

const routes: Routes = [
  { path: '', component: GastosComponent },
  { path: 'carga', component: EditGastosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosRoutingModule { }
