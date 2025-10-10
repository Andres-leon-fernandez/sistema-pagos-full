import { EstudiantesService } from './../../services/estudiantes-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagos',
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule],
  templateUrl: './pagos.html',
  styleUrl: './pagos.css'
})
export class Pagos implements OnInit {
  public pagos: any;
  public datasource: any;
  public displayColumns = ['id', 'fecha', 'cantidad', 'type', 'status', 'nombre'];

  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private http: HttpClient, private estudiantesService:EstudiantesService) {

  }

  ngOnInit(): void {
    this.estudiantesService.getAllPagos().subscribe({
      next: data => {
        this.pagos = data;
        this.datasource = new MatTableDataSource(this.pagos);
        this.datasource.paginator = this.paginador;
        this.datasource.sort = this.sort;
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
