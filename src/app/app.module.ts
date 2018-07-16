// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AesModule } from '../aes/aes.module';

// components
import { AppComponent } from './app.component';

// services
import { AesService } from '../services/aes.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AesModule
  ],
  exports: [
    AesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
