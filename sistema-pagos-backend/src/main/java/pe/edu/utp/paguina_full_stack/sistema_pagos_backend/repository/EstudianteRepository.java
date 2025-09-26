package pe.edu.utp.paguina_full_stack.sistema_pagos_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities.Estudiante;

@Repository

public interface EstudianteRepository extends JpaRepository<Estudiante, String> {

    Estudiante findByCodigo(String codigo);

    List<Estudiante> findByProgramaId(String programaId);
}
