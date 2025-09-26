package pe.edu.utp.paguina_full_stack.sistema_pagos_backend.services;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.transaction.Transactional;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.PagoStatus;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.TypePago;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities.Estudiante;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities.Pago;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.repository.EstudianteRepository;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.repository.PagoRepository;

@Service
@Transactional
public class PagoServices {
    @Autowired
    private PagoRepository pagoRepository;
    @Autowired
    private EstudianteRepository estudianteRepository;

    public Pago savePago(MultipartFile file, double cantidad, TypePago type, LocalDate date, String codigoEstudiante)
            throws IOException {
        /*
         * se crea una ruta para guardar el archivo
         * System.getProperty("user.home") ruta de usuario y crea una carpeta
         * 
         */
        Path folderPath = Paths.get(System.getProperty("user.home"), "ensert-data", "pagos");

        if (!Files.exists(folderPath)) {
            Files.createDirectories(folderPath);
        }

        String fileName = UUID.randomUUID().toString();

        Path filePath = Paths.get(System.getProperty("user.home"), "ensert-data", "pagos", fileName + ".pdf");

        Files.copy(file.getInputStream(), filePath);

        Estudiante estudiante = estudianteRepository.findByCodigo(codigoEstudiante);

        Pago pago = Pago.builder()
                .type(type)
                .fecha(date)
                .estado(PagoStatus.CREADO)
                .estudiante(estudiante)
                .cantidad(cantidad)
                .file(filePath.toUri().toString())
                .build();
        return pagoRepository.save(pago);
    }

    public byte[] getArchivoPorId(Long pagoId) throws IOException {
        Pago pago = pagoRepository.findById(pagoId).get();
        return Files.readAllBytes(Path.of(URI.create(pago.getFile())));
    }

    public Pago actualizarPagoPorStatus(PagoStatus status, Long pagoId) {
        Pago pago = pagoRepository.findById(pagoId).get();
        pago.setEstado(status);
        return pagoRepository.save(pago);
    }
}
