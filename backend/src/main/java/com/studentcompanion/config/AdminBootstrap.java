package com.studentcompanion.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.studentcompanion.model.Role;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;

@Component
public class AdminBootstrap implements ApplicationRunner {
    private static final Logger log = LoggerFactory.getLogger(AdminBootstrap.class);

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
            log.error("Admin bootstrap was enabled but ADMIN_EMAIL or ADMIN_PASSWORD is invalid; "
                    + "skipping admin creation. ADMIN_PASSWORD must contain at least 8 characters.");
            return;
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
