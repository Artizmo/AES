import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AesModule } from '../aes/aes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
