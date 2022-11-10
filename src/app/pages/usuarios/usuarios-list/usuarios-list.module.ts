import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListRoutingModule } from './usuarios-list-routing.module';
import { UsuariosListComponent } from './usuarios-list.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    UsuariosListComponent
  ],
  imports: [
    CommonModule,
    UsuarioListRoutingModule,
    MatButtonModule
  ]
})
export class UsuariosListModule { }
