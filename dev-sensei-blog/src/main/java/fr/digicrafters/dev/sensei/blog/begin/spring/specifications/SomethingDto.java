package fr.digicrafters.dev.sensei.blog.begin.spring.specifications;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;

@Getter // Lombok : génère automatiquement les getters
@Setter // Lombok : génère automatiquement les setters
@ToString // Lombok : génère automatiquement la méthode toString
public class SomethingDto {

    private Long id;
    private String name;
    private String description;
    private int quantity;
    private Instant insertionDate;
    private Boolean liked;
}
