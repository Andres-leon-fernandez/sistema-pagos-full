import { HttpClient } from '@angular/common/http';
import { EstudiantesService } from './../../services/estudiantes-service';
import { Estudiante } from '../../models/estudiantes.models';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgForOf } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
@Component({
  selector: 'app-estudiantes',
  imports: [MatCardModule, MatDividerModule, NgForOf,MatSortModule,MatTableModule],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css',
})
export class Estudiantes implements OnInit {
  estudiantes!: Array<Estudiante>;
  estudiantesDataSource!: any;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'codigo', 'programaId'];

  constructor(private estudiantesService: EstudiantesService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.estudiantesService.getAllEstudiantes().subscribe({
      next: (value) => {
        this.estudiantes = value;
        this.estudiantesDataSource = new MatTableDataSource(this.estudiantes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
