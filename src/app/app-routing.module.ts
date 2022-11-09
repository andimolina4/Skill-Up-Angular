import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './core/guards/home.guard';
import { HomeComponent } from './pages/home/home-page/home.component';

const routes: Routes = [
  {
    path: 'auth/login',
    loadChildren: () =>
      import('./pages/auth-login/auth-login.module').then(
        (m) => m.AuthLoginModule
      ),
  },
  {
    path: 'auth/registro',
    loadChildren: () =>
      import('./pages/auth-registro/auth-registro.module').then(
        (m) => m.AuthRegistroModule
      ),
  },
  {
    path: 'auth/reset-password',
    loadChildren: () =>
      import('./pages/auth-reset-password/auth-reset-password.module').then(
        (m) => m.AuthResetPasswordModule
      ),
  },
  {
    path: 'home',
    canActivate: [HomeGuard],
    component: HomeComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
