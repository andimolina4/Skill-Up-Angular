import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioPerfilDetailComponent } from './usuario-perfil-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPerfilDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPerfilRoutingModule {}
