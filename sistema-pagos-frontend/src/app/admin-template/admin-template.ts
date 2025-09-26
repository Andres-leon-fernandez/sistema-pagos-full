import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-template',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSidenavModule],
  templateUrl: './admin-template.html',
  styleUrl: './admin-template.css'
})
export class AdminTemplate {

}
