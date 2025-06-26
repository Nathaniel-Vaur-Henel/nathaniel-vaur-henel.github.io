package fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases;

import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingDto;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingMapper;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class SomethingFindAllUseCase {

    private final SomethingRepository repository;
    private final SomethingMapper mapper;

    public List<SomethingDto> findAll() {
        return repository.findAll().stream().map(mapper::toDto).toList();
    }
}
