import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminTemplate } from "./admin-template/admin-template";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminTemplate],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sistema-pagos-frontend');
}
