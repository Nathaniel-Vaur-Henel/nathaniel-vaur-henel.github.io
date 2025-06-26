package fr.digicrafters.dev.sensei.blog.begin.spring.specifications.use.cases;

import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingDto;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingEntity;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingMapper;
import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.SomethingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class SomethingUpdateUseCase {
    private final SomethingRepository repository;
    private final SomethingMapper mapper;

    public SomethingDto update(Long id, SomethingDto somethingDto) {
        somethingDto.setId(id);
        SomethingEntity entity = mapper.toEntity(somethingDto);
        SomethingEntity saved = repository.save(entity);
        return mapper.toDto(saved);
    }
}
