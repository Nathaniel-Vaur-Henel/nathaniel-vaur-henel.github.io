package fr.digicrafters.dev.sensei.blog.begin.spring.specifications;

import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases.SomethingCreateUseCase;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases.SomethingDeleteUseCase;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases.SomethingFindAllUseCase;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases.SomethingFindByIdUseCase;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases.SomethingUpdateUseCase;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j // Lombok : génère automatiquement un logger
@RequiredArgsConstructor
// Lombok : génère automatiquement un constructeur avec tous les champs en paramètres. Cela permet d'injecter les dépendances dans le contrôleur.
@RestController // indique que cette classe est un bean Spring de type Controller
@RequestMapping("/api/something")
// indique que toutes les méthodes de cette classe sont accessibles via l'URL /api/something
public class SomethingController {
    // tous les use cases dont nous avons besoin, un par action
    private final SomethingCreateUseCase somethingCreateUseCase;
    private final SomethingFindAllUseCase somethingFindAllUseCase;
    private final SomethingFindByIdUseCase somethingFindByIdUseCase;
    private final SomethingUpdateUseCase somethingUpdateUseCase;
    private final SomethingDeleteUseCase somethingDeleteUseCase;
  
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public SomethingDto create(@RequestBody SomethingDto somethingDto) { // le paramètre somethingDto est récupéré dans le corps de la requête
        log.info("POST /api/something {}", somethingDto); // log pour voir ce qui se passe dans la console
        return somethingCreateUseCase.create(somethingDto);
    }
  
    @ResponseStatus(HttpStatus.OK) // indique que la méthode retourne un code HTTP 200
    @GetMapping // indique que cette méthode est accessible via une requête HTTP GET
    public List<SomethingDto> findAll() {
        log.info("GET /api/something"); // log pour voir ce qui se passe dans la console
        return somethingFindAllUseCase.findAll(); // appel du use case
    }
  
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public SomethingDto findById(@PathVariable Long id) { // le paramètre id est récupéré dans l'URL
        log.info("GET /api/something/{}", id); // log pour voir ce qui se passe dans la console
        return somethingFindByIdUseCase.findById(id);
    }
  
    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/{id}")
    public SomethingDto update(@PathVariable Long id, @RequestBody SomethingDto somethingDto) {
        log.info("PUT /api/something/{} {}", id, somethingDto); // log pour voir ce qui se passe dans la console
        return somethingUpdateUseCase.update(id, somethingDto);
    }
  
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        log.info("DELETE /api/something/{}", id); // log pour voir ce qui se passe dans la console
        somethingDeleteUseCase.delete(id);
    }
}
