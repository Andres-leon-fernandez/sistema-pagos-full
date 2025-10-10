export interface Estudiante {
  id: string,
  codigo: string,
  nombre: string,
  apellido: string,
  programaId: string,
  foto: string
}

export interface Pago {
  id: number,
  fecha: string,
  canridad: number,
  type: string,
  status: string,
  file: string,
  estudiante: Estudiante
}

export enum PaymentType {
  YAPE = 0, PLIN = 1, EFECTIVO = 2, CHEQUE = 3, TRANSFERENCIA = 4, DEPOSITO = 5
}

export enum PaymentStatus {
  CREADO = 0, VALIDADO = 1, RECHAZADO = 2
}
