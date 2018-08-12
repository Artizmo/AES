// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// material
import { MatMenuModule, MatButtonModule } from '@angular/material';

// components
import { AppHeaderComponent } from 'core/components/app-header/app-header.component';

@NgModule({
  declarations: [AppHeaderComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    AppHeaderComponent
  ]
})
export class SharedModule { }
