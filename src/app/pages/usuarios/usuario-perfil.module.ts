import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPerfilDetailComponent } from './usuario-perfil-detail/usuario-perfil-detail/usuario-perfil-detail.component';
import { UsuarioPerfilRoutingModule } from './usuario-perfil-routing.module';



@NgModule({
  declarations: [
    UsuarioPerfilDetailComponent
  ],
  imports: [
    CommonModule,
    UsuarioPerfilRoutingModule
  ]
})
export class UsuarioPerfilModule { }
