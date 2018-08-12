/* TODOS
  [] move thre menu components into a headers module
*/
// modules
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// app modules
import { SharedModule} from 'shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// guards
import { AuthGuard } from './guards/auth.guard';

// components
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileMenuComponent } from './components/header/components/profile-menu/profile-menu.component';
import { NotificationsMenuComponent } from './components/header/components/notifications-menu/notifications-menu.component';
import { AppsMenuComponent } from './components/header/components/apps-menu/apps-menu.component';

// services
import { UserService } from 'services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'services/auth.service';
import { SkipSelf } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'esn',
        loadChildren: './modules/esn/esn.module#EsnModule'
      },
      {
        path: 'messages',
        loadChildren: './modules/message/message.module#MessageModule'
      }
    ]
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
  providers: [AuthService, CookieService, UserService],
  declarations: [CoreComponent, HeaderComponent, ProfileMenuComponent, NotificationsMenuComponent, AppsMenuComponent]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
