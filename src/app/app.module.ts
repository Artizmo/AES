// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';

// components
import { AppComponent } from 'app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  exports: [
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
