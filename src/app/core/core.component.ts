import { Component } from '@angular/core';
import { AesService } from 'services/aes.service';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'aes-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {
  constructor(private auth: AuthService, private aes: AesService) {
    auth.setUser()
  }

  random() {
    const r = Math.floor(Math.random() * 6 );
    const arr = ['Boba Fett', 'IG-88', 'Dengar', 'Grand Moff Tarkin', 'Admiral Akbar', 'Yoda', 'Luke Skywalker']
    this.aes.setPortalTitle(arr[r]);
  }
}
