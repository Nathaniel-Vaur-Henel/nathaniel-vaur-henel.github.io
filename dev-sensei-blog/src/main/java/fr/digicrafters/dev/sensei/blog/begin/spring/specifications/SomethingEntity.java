package fr.digicrafters.dev.sensei.blog.begin.spring.specifications;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;

@Entity // indique que cette classe est une entité JPA, c'est obligatoire pour que JPA puisse la gérer
@Getter // Lombok : génère automatiquement les getters
@Setter // Lombok : génère automatiquement les setters
@ToString // Lombok : génère automatiquement la méthode toString
public class SomethingEntity {

  @Id // indique que ce champ est la clé primaire qui identifie de manière unique chaque ligne en base
  @GeneratedValue(strategy = GenerationType.IDENTITY) // indique que c'est le SGBD qui s'occupe de générer les identifiants
  private Long id;
  private String name;
  private String description;
  private int quantity;
  @Setter(lombok.AccessLevel.NONE) // indique à Lombok de ne pas générer de setter pour ce champ
  @Column(updatable = false) // indique que la date d'insertion ne peut pas être modifiée
  private Instant insertionDate = Instant.now(); // la date d'insertion est initialisée à la date et l'heure actuelles
  private Boolean liked; // true si on aime, false si on n'aime pas, null si on n'a pas d'avis
}
