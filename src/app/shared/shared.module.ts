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
import { TitleComponent } from './components/title/title.component';
import { GraphicSingleComponent } from './components/graphic-single/graphic-single.component';
import { TableSingleComponent } from './components/table-single/table-single.component';
import { AccountsComponent } from './components/accounts/accounts.component';


@NgModule({
  declarations: [LoaderComponent, HeaderComponent, FooterComponent, SidebarComponent, GraphicsComponent, MovementsComponent, TableComponent, TitleComponent, GraphicSingleComponent, TableSingleComponent, AccountsComponent],
  imports: [CommonModule, RouterModule, MaterialModule,FontAwesomeModule,NgChartsModule],
  exports: [LoaderComponent, HeaderComponent, FooterComponent,SidebarComponent,GraphicsComponent,TableComponent,TitleComponent,GraphicSingleComponent,TableSingleComponent,AccountsComponent],
})
export class SharedModule {}
