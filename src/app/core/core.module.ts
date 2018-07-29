/* TODOS
  [] move thre menu components into a headers module
*/
// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// app modules
import { SharedModule} from 'shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// guards
import { AuthGuard } from 'core/guards/auth.guard';

// components
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileMenuComponent } from './components/header/components/profile-menu/profile-menu.component';
import { NotificationsMenuComponent } from './components/header/components/notifications-menu/notifications-menu.component';
import { AppsMenuComponent } from './components/header/components/apps-menu/apps-menu.component';

import { UserService } from 'services/user.service';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    CoreComponent,
    HeaderComponent,    
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [UserService],
  declarations: [CoreComponent, HeaderComponent, ProfileMenuComponent, NotificationsMenuComponent, AppsMenuComponent]
})
export class CoreModule {}
