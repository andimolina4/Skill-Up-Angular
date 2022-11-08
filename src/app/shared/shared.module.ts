import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { NgChartsModule } from 'ng2-charts';
import { MovementsComponent } from './components/movements/movements.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [LoaderComponent, HeaderComponent, FooterComponent, SidebarComponent, GraphicsComponent, MovementsComponent, TableComponent],
  imports: [CommonModule, RouterModule, MaterialModule,FontAwesomeModule,NgChartsModule],
  exports: [LoaderComponent, HeaderComponent, FooterComponent,SidebarComponent,GraphicsComponent,TableComponent],
})
export class SharedModule {}
