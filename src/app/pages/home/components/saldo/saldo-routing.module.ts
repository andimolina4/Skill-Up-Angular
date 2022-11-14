import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSaldoComponent } from './edit-saldo/edit-saldo.component';
import { SaldoComponent } from './saldo.component';

const routes: Routes = [
  { path: '', component: SaldoComponent },
  { path: 'carga', component: EditSaldoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaldoRoutingModule { }
