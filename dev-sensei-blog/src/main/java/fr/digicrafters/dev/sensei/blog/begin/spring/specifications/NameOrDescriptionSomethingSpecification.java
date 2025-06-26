package fr.digicrafters.dev.sensei.blog.begin.spring.specifications;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

@RequiredArgsConstructor
public class NameOrDescriptionSomethingSpecification implements Specification<SomethingEntity> {
  private final String text;


  @Override
  public Predicate toPredicate(Root<SomethingEntity> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
    // On crée une condition qui vérifie si le nom ou la description contient le texte recherché
    Predicate namePredicate = criteriaBuilder.like(root.get("name"), "%" + text + "%");
    Predicate descriptionPredicate = criteriaBuilder.like(root.get("description"), "%" + text + "%");
    // On combine les deux conditions avec un OR
    return criteriaBuilder.or(namePredicate, descriptionPredicate);
  }
}
