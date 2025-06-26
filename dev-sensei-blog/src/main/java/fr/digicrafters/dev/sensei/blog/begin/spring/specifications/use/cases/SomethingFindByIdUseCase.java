package fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases;

import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingDto;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingMapper;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class SomethingFindByIdUseCase {
    private final SomethingRepository repository;
    private final SomethingMapper mapper;

    public SomethingDto findById(Long id) {
        return repository.findById(id)
                .map(mapper::toDto)
                .orElseThrow(EntityNotFoundException::new);
    }
}
