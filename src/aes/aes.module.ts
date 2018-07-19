// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// material
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FormsModule
  ],
  declarations: [HeaderComponent]
})
export class AesModule { }
