/* TODOS
  [] move thre menu components into a headers module
*/
// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// services
import { AuthService } from 'core/auth/auth.service';

// material
import { SharedModule} from '../shared/shared.module';
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
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [AuthService],
  declarations: [HeaderComponent, ProfileMenuComponent, NotificationsMenuComponent, AppsMenuComponent]
})
export class CoreModule {
  constructor() {
    console.log('auth service should find a valid token')
  }
 }
