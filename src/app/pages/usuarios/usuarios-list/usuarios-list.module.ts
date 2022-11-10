import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListRoutingModule } from './usuarios-list-routing.module';
import { UsuariosListComponent } from './usuarios-list.component';



@NgModule({
  declarations: [
    UsuariosListComponent
  ],
  imports: [
    CommonModule,
    UsuarioListRoutingModule
  ]
})
export class UsuariosListModule { }
