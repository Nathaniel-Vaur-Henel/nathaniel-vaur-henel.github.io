package fr.digicrafters.dev.sensei.blog.enums;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.function.ThrowingSupplier;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.reflections.Reflections;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class LinkedEnumTest {

    /**
     * @return toutes les classes qui implémentent {@link LinkedEnum}
     */
    @SuppressWarnings("rawtypes")
    static Stream<Arguments> findAllLinkedEnum() {
        Reflections reflections = new Reflections(LinkedEnum.class.getPackageName()); // ton package de base
        Set<Class<? extends LinkedEnum>> classes = reflections.getSubTypesOf(LinkedEnum.class);
        return classes.stream()
            .map(Arguments::of);
    }

    /**
     * @param rootEnumClass la classe de l'énumération
     * @param <E>           le type de l'énumération
     */
    @DisplayName("Vérifie que toutes les énumérations liées sont bien mappées")
    @MethodSource("findAllLinkedEnum")
    @ParameterizedTest
    <E extends Enum<E>> void should_all_linked_enum_are_mapped_correctly(Class<E> rootEnumClass) {
        // on vérifie que la classe est bien une énumération
        assertTrue(Enum.class.isAssignableFrom(rootEnumClass));
        // on récupère la classe de l'énumération liée
        Class<E> linkedEnumClass = resolveLinkedEnumType(rootEnumClass, LinkedEnum.class);

        // on récupère les valeurs des énumérations
        Enum<?>[] rootValues = rootEnumClass.getEnumConstants();
        Enum<?>[] linkValues = linkedEnumClass.getEnumConstants();
        assertEquals(rootValues.length, linkValues.length, "La taille des énumérations doit être la même");

        // on vérifie que toutes les valeurs de l'énumération liée sont bien mappées dans un sens
        Arrays.stream(rootValues)
            .<ThrowingSupplier<E>>map(rootValue -> () -> Enum.valueOf(linkedEnumClass, rootValue.name()))
            .forEach(Assertions::assertDoesNotThrow);
        // et dans l'autre sens
        Arrays.stream(linkValues)
            .<ThrowingSupplier<E>>map(linkValue -> () -> Enum.valueOf(rootEnumClass, linkValue.name()))
            .forEach(Assertions::assertDoesNotThrow);
    }

    /**
     * Récupère le type de l'interface implémentée par une classe.
     *
     * @param implementedClass la classe qui implémente l'interface
     * @param linkInterface    l'interface dont on veut récupérer le type
     * @return la classe du paramètre de l'interface
     */
    @SuppressWarnings("unchecked")
    private static <E extends Enum<E>> Class<E> resolveLinkedEnumType(Class<?> implementedClass, Class<?> linkInterface) {
        for (Type type : implementedClass.getGenericInterfaces()) {
            if (type instanceof ParameterizedType parameterizedType) {
                Type rawType = parameterizedType.getRawType();

                if (rawType instanceof Class<?> rawClass && linkInterface.isAssignableFrom(rawClass)) {
                    Type actualType = parameterizedType.getActualTypeArguments()[0];
                    if (actualType instanceof Class<?>) {
                        return (Class<E>) actualType;
                    }
                }
            }
        }
        throw new RuntimeException("Could not resolve " + linkInterface.getName() + " type for " + implementedClass);
    }
}
