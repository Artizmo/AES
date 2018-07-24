// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

// material
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from 'app.component';

// services
import { AesService } from 'services/aes.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  exports: [
    CoreModule
  ],
  providers: [AesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
