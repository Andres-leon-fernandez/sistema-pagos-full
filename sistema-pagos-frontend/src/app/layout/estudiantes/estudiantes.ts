import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-estudiantes',
  imports: [MatCardModule,MatDividerModule],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})
export class Estudiantes {

}
