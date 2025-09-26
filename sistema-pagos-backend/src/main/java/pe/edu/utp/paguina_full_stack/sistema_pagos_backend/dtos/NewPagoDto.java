package pe.edu.utp.paguina_full_stack.sistema_pagos_backend.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.TypePago;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewPagoDto {
    private double cantidad;
    private TypePago type;
    private LocalDate date;
    private String codigoEstudiante;
}
