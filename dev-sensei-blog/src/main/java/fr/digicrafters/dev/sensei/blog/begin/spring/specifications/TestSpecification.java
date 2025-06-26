package fr.digicrafters.dev.sensei.blog.begin.spring.specifications;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.stream.IntStream;

@Component
@Slf4j // Utilisation de Lombok pour générer les logs
@RequiredArgsConstructor
public class TestSpecification {

  private final DataGenerator dataGenerator;
  private final SomethingRepository repository;

  /**
   * Initialisation de la base de données.
   */
  public void init() {
    log.info("*** Test de la spécification ***");
    repository.deleteAll(); // on vide la table pour être tranquille, surtout si tu as encore les anciens tests

    //création de 100 choses
    IntStream.range(0, 100)
      .mapToObj(i -> buildSomethingEntity())
      .forEach(repository::save);
  }

  /**
   * Création d'une instance de SomethingEntity.
   */
  private SomethingEntity buildSomethingEntity() {
    SomethingEntity something = new SomethingEntity();
    something.setName(dataGenerator.generateRandomText(10));
    something.setDescription(dataGenerator.generateRandomText(20));
    something.setLiked(dataGenerator.generateRandomBoolean());
    something.setQuantity(dataGenerator.generateRandomInt(10));
    return something;
  }

  /**
   * Test de {@link NameSomethingSpecification}.
   */
  public void testNamedSpecification() {
    log.info("**** NameSomethingSpecification ****");

    NameSomethingSpecification specification = new NameSomethingSpecification("de");
    log.info("Name contains 'de' exists? {}", repository.exists(specification));
    log.info("Name contains 'de' count? {}", repository.count(specification));
    log.info("Name contains 'de' findAll? {}", repository.findAll(specification));
    repository.findOne(specification)
      .ifPresent(something -> log.info("Named contains 'de' findOne ?{}", something));
  }

  /**
   * Test de {@link NameOrDescriptionSomethingSpecification}.
   */
  public void testNameOrDescriptionSomethingSpecification() {
    log.info("**** NameOrDescriptionSomethingSpecification ****");

    NameOrDescriptionSomethingSpecification nameContainsC = new NameOrDescriptionSomethingSpecification("de");
    log.info("Name or description contain 'de' exists? {}", repository.exists(nameContainsC));
    log.info("Name or description contain 'de' count? {}", repository.count(nameContainsC));
    log.info("Name or description contain 'de' findAll? {}", repository.findAll(nameContainsC));
    // Pas de findOne car il y a plusieurs résultats
  }
}
