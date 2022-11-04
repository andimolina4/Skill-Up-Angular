import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [LoaderComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [LoaderComponent, HeaderComponent],
})
export class SharedModule {}
