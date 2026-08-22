package com.studentcompanion.controller;

import com.studentcompanion.model.Role;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.Map;

@RestController
@RequestMapping("/api/internal")
@PreAuthorize("hasAuthority('ADMIN')")
public class InternalController {

    @Autowired
    private UserRepository userRepository;

    @PutMapping("/promote-to-admin")
    public ResponseEntity<?> promoteToAdmin(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        user.setRole(Role.ADMIN); // ⬅️ Set to admin manually
        userRepository.save(user);
        return ResponseEntity.ok("User promoted to ADMIN");
    }
}
