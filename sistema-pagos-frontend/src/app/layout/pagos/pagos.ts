import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

interface Estudiante {
  id: string;
  nombre: string;
  apellido: string;
  codigo: string;
  programaId: string;
  foto: string | null;
}

interface Pago {
  id: number;
  type: string;
  fecha: string;
  cantidad: number;
  estado: string;
  file: string | null;
  estudiante: Estudiante;
}

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './pagos.html',
  styleUrl: './pagos.css'
})
export class Pagos implements OnInit {
  public pagos: Pago[] = [];
  public datasource!: MatTableDataSource<Pago>;
  public displayColumns = ['id', 'fecha', 'cantidad', 'type', 'estado', 'estudiante'];

  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Pago[]>("http://localhost:8080/pagos").subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data); // Para debug
        this.pagos = data;
        this.datasource = new MatTableDataSource(this.pagos);
        this.datasource.paginator = this.paginador;
        this.datasource.sort = this.sort;
      },
      error: (err) => {
        console.error('Error al cargar pagos:', err);
      }
    });
  }
}




/*
@Component({
  selector: 'app-pagos',
  imports: [
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


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/pagos").subscribe({
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
*/
