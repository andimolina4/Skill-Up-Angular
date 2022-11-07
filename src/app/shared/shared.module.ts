import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [LoaderComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, MaterialModule,FontAwesomeModule],
  exports: [LoaderComponent, HeaderComponent, FooterComponent,SidebarComponent],
})
export class SharedModule {}
