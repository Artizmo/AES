// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// material
import { MatMenuModule, MatButtonModule, MatCardModule } from '@angular/material';

// components
import { AppHeaderComponent } from 'core/components/app-header/app-header.component';

@NgModule({
  declarations: [AppHeaderComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    AppHeaderComponent
  ]
})
export class SharedModule { }
