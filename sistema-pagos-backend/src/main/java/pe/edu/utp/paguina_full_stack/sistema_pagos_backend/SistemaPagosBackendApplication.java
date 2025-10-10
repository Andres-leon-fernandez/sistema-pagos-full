package pe.edu.utp.paguina_full_stack.sistema_pagos_backend;

import java.time.LocalDate;
import java.util.Random;
import java.util.UUID;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.PagoStatus;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.emuns.TypePago;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities.Estudiante;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.entities.Pago;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.repository.EstudianteRepository;
import pe.edu.utp.paguina_full_stack.sistema_pagos_backend.repository.PagoRepository;

@SpringBootApplication
public class SistemaPagosBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SistemaPagosBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner comanCommandLineRunner(EstudianteRepository estudianteRepository, PagoRepository pagoRepository) {
		return args -> {
			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Jose")
					.apellido("Perez")
					.programaId("LAT1")
					.codigo("1234")
					.build());

			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Carlos")
					.apellido("Cabrera")
					.programaId("LAT2")
					.codigo("2345")
					.build());

			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Pepe")
					.apellido("Lopez")
					.programaId("LAT3")
					.codigo("3456")
					.build());

			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Andres")
					.apellido("Leon")
					.programaId("LAT4")
					.codigo("4567")
					.build());

			TypePago tiposPago[] = TypePago.values();
			Random rdm = new Random();
			estudianteRepository.findAll().forEach(estudiante -> {
				for (int i = 0; i < 10; i++) {
					int index = rdm.nextInt(tiposPago.length);
					Pago pago = Pago.builder()
							.cantidad(200 + (int) (Math.random() * 2000))
							.type(tiposPago[index])
							.status(PagoStatus.CREADO)
							.fecha(LocalDate.now())
							.estudiante(estudiante)
							.build();
					pagoRepository.save(pago);
				}
			});
		};
	}

}
