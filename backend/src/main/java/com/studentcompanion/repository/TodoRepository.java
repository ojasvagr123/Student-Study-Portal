package com.studentcompanion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.studentcompanion.model.Todo;
import java.util.List;
import com.studentcompanion.model.User;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByUserOrderByIdDesc(User user);
    java.util.Optional<Todo> findByIdAndUser(Long id, User user);
}
