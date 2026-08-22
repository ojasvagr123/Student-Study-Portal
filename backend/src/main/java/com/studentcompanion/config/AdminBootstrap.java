package com.studentcompanion.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.studentcompanion.model.Role;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;

@Component
public class AdminBootstrap implements ApplicationRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.bootstrap-admin.enabled:false}") private boolean enabled;
    @Value("${app.bootstrap-admin.email:}") private String email;
    @Value("${app.bootstrap-admin.password:}") private String password;

    public AdminBootstrap(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(ApplicationArguments args) {
        if (!enabled) return;
        if (email.isBlank() || password.length() < 8) {
            throw new IllegalStateException("Bootstrap admin requires an email and password of at least 8 characters");
        }
        User admin = userRepository.findByEmail(email.toLowerCase());
        if (admin == null) {
            admin = new User();
            admin.setName("Studify Administrator");
            admin.setEmail(email.toLowerCase());
            admin.setPassword(passwordEncoder.encode(password));
            admin.setRole(Role.ADMIN);
            admin.setActive(true);
            admin.setEmailVerified(true);
            userRepository.save(admin);
        }
    }
}
