package fr.digicrafters.dev.sensei.blog.begin.spring.specifications;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
// indique que cette interface est un bean Spring de type Repository, facultatif mais recommandé pour la clarté
public interface SomethingRepository
  extends JpaRepository<SomethingEntity, Long>, // interface Spring Data JPA qui fournit des méthodes pour effectuer des opérations CRUD sur l'entité
  JpaSpecificationExecutor<SomethingEntity>// interface Spring Data JPA qui fournit des méthodes pour effectuer des requêtes dynamiques avec des spécifications
{
}
