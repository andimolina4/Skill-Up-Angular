import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPerfilDetailComponent } from './usuario-perfil-detail.component';
import { UsuarioPerfilRoutingModule } from './usuario-perfil-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UsuarioPerfilDetailComponent
  ],
  imports: [
    CommonModule,
    UsuarioPerfilRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsuarioPerfilModule { }
