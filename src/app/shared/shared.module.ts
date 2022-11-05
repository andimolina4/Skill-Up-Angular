import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [LoaderComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [LoaderComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
