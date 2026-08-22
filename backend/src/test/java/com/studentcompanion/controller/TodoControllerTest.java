package com.studentcompanion.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.studentcompanion.dto.TodoRequest;
import com.studentcompanion.model.Todo;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.TodoRepository;
import com.studentcompanion.repository.UserRepository;

class TodoControllerTest {
    private TodoRepository todoRepository;
    private UserRepository userRepository;
    private TodoController controller;
    private User user;
    private UsernamePasswordAuthenticationToken authentication;

    @BeforeEach
    void setUp() {
        todoRepository = mock(TodoRepository.class);
        userRepository = mock(UserRepository.class);
        controller = new TodoController(todoRepository, userRepository);
        user = new User();
        user.setEmail("student@example.com");
        authentication = new UsernamePasswordAuthenticationToken("student@example.com", null);
        when(userRepository.findByEmail("student@example.com")).thenReturn(user);
    }

    @Test
    void updateOnlyUsesTodoOwnedByAuthenticatedUser() {
        Todo todo = new Todo();
        todo.setId(10L);
        todo.setText("Old task");
        todo.setUser(user);
        when(todoRepository.findByIdAndUser(10L, user)).thenReturn(Optional.of(todo));
        when(todoRepository.save(todo)).thenReturn(todo);

        Todo updated = controller.updateTodo(authentication, 10L, new TodoRequest("New task", true));

        assertEquals("New task", updated.getText());
        assertEquals(true, updated.isDone());
        verify(todoRepository).findByIdAndUser(10L, user);
    }

    @Test
    void updateRejectsTodoNotOwnedByAuthenticatedUser() {
        when(todoRepository.findByIdAndUser(99L, user)).thenReturn(Optional.empty());
        assertThrows(IllegalArgumentException.class,
                () -> controller.updateTodo(authentication, 99L, new TodoRequest("No", false)));
        verify(todoRepository, never()).save(any());
    }
}
