package com.studentcompanion.controller;

import java.util.Collections;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentcompanion.dto.AuthRequest;
import com.studentcompanion.dto.AuthResponse;
import com.studentcompanion.dto.RegistrationRequest;
import com.studentcompanion.model.Role;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;
import com.studentcompanion.service.CustomUserDetailsService;
import com.studentcompanion.util.JwtUtil;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager,
            CustomUserDetailsService userDetailsService, JwtUtil jwtUtil,
            UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        } catch (BadCredentialsException exception) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Collections.singletonMap("message", "Invalid email or password"));
        }
        User user = requireUser(request.getEmail());
        return ResponseEntity.ok(toResponse(user));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegistrationRequest request) {
        if (userRepository.findByEmail(request.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Collections.singletonMap("message", "Email already exists"));
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail().trim().toLowerCase());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEnrollmentNumber(request.getEnrollmentNumber());
        user.setBranch(request.getBranch());
        user.setCurrentSemester(request.getCurrentSemester());
        user.setGender(request.getGender());
        user.setGoal(request.getGoal());
        user.setOtherGoal(request.getOtherGoal());
        user.setLeetcodeUrl(request.getLeetcodeUrl());
        user.setGithubUrl(request.getGithubUrl());
        user.setSkills(request.getSkills());
        user.setDateOfBirth(request.getDateOfBirth());
        user.setRole(Role.STUDENT);
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(toResponse(userRepository.save(user)));
        } catch (DataIntegrityViolationException exception) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Collections.singletonMap("message", "Email or enrollment number already exists"));
        }
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Auth controller is working!");
    }

    private AuthResponse toResponse(User user) {
        UserDetails details = userDetailsService.loadUserByUsername(user.getEmail());
        return new AuthResponse(jwtUtil.generateToken(details), user.getName(), user.getEmail(), user.getBranch(),
                user.getCurrentSemester(), user.getGoal(), user.getEnrollmentNumber(), user.getRole());
    }

    private User requireUser(String email) {
        User user = userRepository.findByEmail(email.trim().toLowerCase());
        if (user == null) throw new IllegalArgumentException("User account not found");
        return user;
    }
}
