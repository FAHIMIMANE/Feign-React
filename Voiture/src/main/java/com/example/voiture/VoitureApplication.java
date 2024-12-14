package com.example.voiture;

import com.example.voiture.entities.Client;
import com.example.voiture.entities.Voiture;
import com.example.voiture.repositories.VoitureRepository;
import com.example.voiture.services.ClientService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@EnableDiscoveryClient
@SpringBootApplication
@EnableFeignClients
public class VoitureApplication {

    public static void main(String[] args) {
        SpringApplication.run(VoitureApplication.class, args);
    }
    @Bean
    CommandLineRunner initialiserBaseH2(VoitureRepository voitureRepository,
                                        ClientService clientService){
        return args -> {
            Client c1 = clientService.clientById(2L);
            Client c2 = clientService.clientById(1L);
            System.out.println("**************************");
            System.out.println("Id est " + c2.getId());
            System.out.println("Nom est " + c2.getNom());
            System.out.println("**************************");
            System.out.println("**************************");
            System.out.println("Id est " + c1.getId());
            System.out.println("Nom est " + c1.getNom());
            System.out.println("**************************");

            voitureRepository.save(new Voiture(null, "AUDI","A 27", "Q3", 1L, c2));
            voitureRepository.save(new Voiture(null, "Mercedes","B41", "Class C ", 1L, c2));
            voitureRepository.save(new Voiture(null, "BMW","AZ 5", "S400", 2L, c1));
        };
    }

}
