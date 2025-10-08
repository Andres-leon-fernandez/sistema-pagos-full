import { AuthServices } from './../../services/auth-services';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink , RouterOutlet} from '@angular/router';
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-admin-temple',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, RouterLink, RouterOutlet, NgIf],
  templateUrl: './admin-temple.html',
  styleUrl: './admin-temple.css'
})
export class AdminTemple {
  constructor(public authServices:AuthServices){

  }

  logout(){
    this.authServices.logout();
  }
}
