package com.studentcompanion.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.studentcompanion.dto.TodoRequest;
import com.studentcompanion.model.Todo;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.TodoRepository;
import com.studentcompanion.repository.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    private final TodoRepository todoRepository;
    private final UserRepository userRepository;

    public TodoController(TodoRepository todoRepository, UserRepository userRepository) {
        this.todoRepository = todoRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Todo> getTodos(Authentication authentication) {
        return todoRepository.findByUserOrderByIdDesc(requireUser(authentication));
    }

    @PostMapping
    public ResponseEntity<Todo> addTodo(Authentication authentication, @Valid @RequestBody TodoRequest request) {
        Todo todo = new Todo();
        todo.setText(request.text());
        todo.setDone(false);
        todo.setUser(requireUser(authentication));
        return ResponseEntity.status(201).body(todoRepository.save(todo));
    }

    @PutMapping("/{id}")
    public Todo updateTodo(Authentication authentication, @PathVariable Long id,
            @Valid @RequestBody TodoRequest request) {
        Todo todo = ownedTodo(id, requireUser(authentication));
        todo.setText(request.text());
        todo.setDone(request.done());
        return todoRepository.save(todo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(Authentication authentication, @PathVariable Long id) {
        todoRepository.delete(ownedTodo(id, requireUser(authentication)));
        return ResponseEntity.noContent().build();
    }

    private Todo ownedTodo(Long id, User user) {
        return todoRepository.findByIdAndUser(id, user)
                .orElseThrow(() -> new IllegalArgumentException("Todo not found"));
    }

    private User requireUser(Authentication authentication) {
        User user = userRepository.findByEmail(authentication.getName());
        if (user == null) throw new IllegalArgumentException("User account not found");
        return user;
    }
}
