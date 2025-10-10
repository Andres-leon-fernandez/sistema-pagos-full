package pe.edu.utp.paguina_full_stack.sistema_pagos_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.PagoStatus;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities.Pago;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.TypePago;

@Repository
public interface PagoRepository extends JpaRepository<Pago, Long> {
    List<Pago> findByEstudianteCodigo(String codigoEstudiante);

    List<Pago> findByStatus(PagoStatus status);

    List<Pago> findByType(TypePago type);
}
