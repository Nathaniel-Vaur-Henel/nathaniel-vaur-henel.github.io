package fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases;

import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class SomethingDeleteUseCase {
    private final SomethingRepository repository;

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
