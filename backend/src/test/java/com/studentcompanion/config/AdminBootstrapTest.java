package com.studentcompanion.config;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verifyNoInteractions;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.util.ReflectionTestUtils;

import com.studentcompanion.repository.UserRepository;

class AdminBootstrapTest {
    @Test
    void invalidOptionalBootstrapConfigurationDoesNotStopApplicationStartup() {
        UserRepository userRepository = mock(UserRepository.class);
        PasswordEncoder passwordEncoder = mock(PasswordEncoder.class);
        AdminBootstrap bootstrap = new AdminBootstrap(userRepository, passwordEncoder);
        ReflectionTestUtils.setField(bootstrap, "enabled", true);
        ReflectionTestUtils.setField(bootstrap, "email", "");
        ReflectionTestUtils.setField(bootstrap, "password", "short");

        assertDoesNotThrow(() -> bootstrap.run(null));
        verifyNoInteractions(userRepository, passwordEncoder);
    }
}
