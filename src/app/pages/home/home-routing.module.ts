import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'saldo',
    loadChildren: () =>
      import('./components/saldo/saldo.module').then((m) => m.SaldoModule),
  },
  {
    path: 'gastos',
    loadChildren: () =>
      import('./components/gastos/gastos.module').then((m) => m.GastosModule),
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./components/my-account/my-account.module').then(
        (m) => m.MyAccountModule
      ),
  },
  {
    path: 'movements',
    loadChildren: () =>
      import('./components/movements/movements.module').then(
        (m) => m.MovementsModule
      ),
  },
  {
    path: 'send-founds',
    loadChildren: () =>
      import('./components/send-founds/send-founds.module').then(
        (m) => m.SendFoundsModule
      ),
  },
  {
    path: 'exchange',
    loadChildren: () =>
      import('./components/exchange/exchange.module').then(
        (m) => m.ExchangeModule
      ),
  },
  {
    path: 'inversiones',
    loadChildren: () =>
      import('./components/investment/investment.module').then(
        (m) => m.InvestmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
