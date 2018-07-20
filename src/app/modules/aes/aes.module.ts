// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// material
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { HeaderComponent } from './components/header/header.component';
import { ProfileMenuComponent } from './components/header/components/profile-menu/profile-menu.component';
import { NotificationsMenuComponent } from './components/header/components/notifications-menu/notifications-menu.component';
import { AppsMenuComponent } from './components/header/components/apps-menu/apps-menu.component';

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
  declarations: [HeaderComponent, ProfileMenuComponent, NotificationsMenuComponent, AppsMenuComponent]
})
export class AesModule { }
