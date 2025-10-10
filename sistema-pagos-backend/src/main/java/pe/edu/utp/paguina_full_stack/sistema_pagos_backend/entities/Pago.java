package pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.PagoStatus;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.TypePago;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TypePago type;
    private LocalDate fecha;
    private double cantidad;

    @Enumerated(EnumType.STRING)
    private PagoStatus status;
    private String file;

    @ManyToOne
    private Estudiante estudiante;
}
