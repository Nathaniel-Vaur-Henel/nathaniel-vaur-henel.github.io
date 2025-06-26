package fr.digicrafters.dev.sensei.blog.begin.spring;

import fr.digicrafters.dev.sensei.blog.begin.spring.specifications.TestSpecification;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BeginSpringApplication {

	public static void main(String[] args) {
		var context =SpringApplication.run(BeginSpringApplication.class, args);

		TestSpecification testSpecification = context.getBean(TestSpecification.class); // on récupère le Bean TestSpecification
		testSpecification.init(); // on initialise les données

		testSpecification.testNamedSpecification(); // on teste la spécification des noms
		testSpecification.testNameOrDescriptionSomethingSpecification(); // on teste la spécification des noms
	}
}
