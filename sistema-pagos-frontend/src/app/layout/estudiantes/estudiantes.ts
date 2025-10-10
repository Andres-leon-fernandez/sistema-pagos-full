import { EstudiantesService } from './../../services/estudiantes-service';
import { Estudiante } from '../../models/estudiantes.models';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-estudiantes',
  imports: [MatCardModule, MatDividerModule, NgForOf],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})
export class Estudiantes implements OnInit{

  estudiantes !: Array<Estudiante>;

  constructor(private estudiantesService:EstudiantesService){}

  ngOnInit(): void {
    this.estudiantesService.getAllEstudiantes().subscribe({
      next: value=>{
        this.estudiantes=value;
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
