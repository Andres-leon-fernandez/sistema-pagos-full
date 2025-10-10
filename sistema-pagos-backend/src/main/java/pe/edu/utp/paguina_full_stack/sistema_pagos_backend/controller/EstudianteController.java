package pe.edu.utp.paguina_full_stack.sistema_pagos_backend.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.PagoStatus;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.TypePago;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities.Estudiante;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities.Pago;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.repository.EstudianteRepository;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.repository.PagoRepository;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.services.PagoServices;

@RestController
@CrossOrigin("*")
public class EstudianteController {
    @Autowired
    private EstudianteRepository estudianteRepository;
    @Autowired
    private PagoRepository pagoRepository;

    @Autowired
    private PagoServices pagoServices;

    @GetMapping("/estudiantes")
    public List<Estudiante> listarEstudiantes() {
        return estudianteRepository.findAll();
    }

    @GetMapping("/estudiantes/{codigoEstudiante}")
    public Estudiante listarEstudiantePorCodigo(@PathVariable String codigoEstudiante) {
        return estudianteRepository.findByCodigo(codigoEstudiante);
    }

    @GetMapping("/estudiantesporPrograma")
    public List<Estudiante> listarEstudiantePorPrograma(@RequestParam String programaId) {
        return estudianteRepository.findByProgramaId(programaId);
    }

    @GetMapping("/pagos")
    public List<Pago> listarPago() {
        return pagoRepository.findAll();
    }

    @GetMapping("/pagos/{id}")
    public Pago ListarPagoPorId(@PathVariable Long id) {
        return pagoRepository.findById(id).get();
    }

    @GetMapping("estudiantes/{codigoEstudiante}/pagos")
    public List<Pago> ListarPorCodigoEstudiante(@PathVariable String codigoEstudiante) {
        return pagoRepository.findByEstudianteCodigo(codigoEstudiante);
    }

    @GetMapping("/pagos/{status}")
    public List<Pago> lisatrPagosPorStatus(@RequestParam PagoStatus status) {
        return pagoRepository.findByStatus(status);
    }

    @GetMapping("/pagos/porTipo")
    public List<Pago> listarPagosPorType(@RequestParam TypePago type) {
        return pagoRepository.findByType(type);
    }

    @PutMapping("/pagos/{pagosId}/actualizarPago")
    public Pago actualizarStatusDePago(@RequestParam PagoStatus status, @PathVariable Long pagoId) {
        return pagoServices.actualizarPagoPorStatus(status, pagoId);
    }

    @PostMapping(path = "/pagos", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Pago guardarPago(
            @RequestParam("file") MultipartFile file,
            double cantidad,
            TypePago type,
            LocalDate date,
            String codigoEstudiante) throws IOException {
        return pagoServices.savePago(file, cantidad, type, date, codigoEstudiante);
    }

    @GetMapping(value = "/pagoFile/{pagoId}", produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] listarArchivoPorId(@PathVariable Long pagoId) throws IOException {
        return pagoServices.getArchivoPorId(pagoId);
    }
}
