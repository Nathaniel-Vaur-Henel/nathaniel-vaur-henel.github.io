package fr.digicrafters.dev.sensei.blog.begin.spring.specifications;

import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component // pour que Spring puisse instancier cette classe
@NoArgsConstructor // pour que Lombok génère un constructeur sans argument
class DataGenerator {
  /**
   * Un générateur de données aléatoires. <br>
   * Il est initialisé avec une seed pour avoir toujours les mêmes valeurs aléatoires à chaque lancement.
   *
   */
  private static final Random RANDOM = new Random(2018080120180804L); // seed pour avoir toujours les mêmes valeurs aléatoires à chaque lancement.

  /**
   * Génère une chaîne de caractères aléatoires entre 'a' et 'z' de longueur donnée.
   */
  String generateRandomText(int length) {
    return IntStream.range(0, length)
            .map(i -> RANDOM.nextInt(26) + 'a')
            .mapToObj(Character::toString)
            .collect(Collectors.joining());
  }

  /**
   * Génère un booléen aléatoire. <br>
   * La methode {@link Random#nextBoolean()} génère seulement un boolean primitif et nous voulons un objet.
   */
  Boolean generateRandomBoolean() {
    return switch (RANDOM.nextInt(3)) {
      case 0 -> Boolean.FALSE;
      case 1 -> Boolean.TRUE;
      default -> null;
    };
  }

  /**
   * Génère un entier aléatoire entre 0 et max (exclus).
   */
  int generateRandomInt(int max) {
    return RANDOM.nextInt(max);
  }
}
