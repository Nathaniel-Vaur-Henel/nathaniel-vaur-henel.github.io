package fr.digicrafters.dev.sensei.blog.begin.spring.specifications;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

@RequiredArgsConstructor
public class NameSomethingSpecification implements Specification<SomethingEntity> {
  private final String name;

  /**
   * On implémente la méthode {@link Specification#toPredicate} qui permet de construire la requête SQL.
   *
   * @param root            représente l'entité sur laquelle on fait la requête, la table SQL
   * @param query           représente la requête SQL
   * @param criteriaBuilder l'objet qui permet de construire la requête
   * @return un {@link Predicate} qui représente la condition de la requête
   */
  @Override
  public Predicate toPredicate(Root<SomethingEntity> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
    return criteriaBuilder.like(root.get("name"), "%" + name + "%"); // les % sont des jokers qui permettent de dire que le texte peut être n'importe quoi, comme en SQL
  }
}
