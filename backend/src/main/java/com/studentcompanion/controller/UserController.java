package com.studentcompanion.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentcompanion.dto.ProfileUpdateRequest;
import com.studentcompanion.dto.UserResponse;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream().map(UserResponse::from).toList();
    }

    @GetMapping("/profile")
    public ResponseEntity<UserResponse> getProfile(Authentication authentication) {
        return ResponseEntity.ok(UserResponse.from(requireUser(authentication)));
    }

    @PutMapping("/profile")
    public ResponseEntity<UserResponse> updateProfile(
            Authentication authentication,
            @Valid @RequestBody ProfileUpdateRequest request) {
        User user = requireUser(authentication);
        user.setName(request.name());
        user.setBranch(request.branch());
        user.setCurrentSemester(request.currentSemester());
        user.setGoal(request.goal());
        user.setLeetcodeUrl(request.leetcodeUrl());
        user.setGithubUrl(request.githubUrl());
        user.setSkills(request.skills());
        user.setUpdatedAt(java.time.LocalDateTime.now());
        return ResponseEntity.ok(UserResponse.from(userRepository.save(user)));
    }

    private User requireUser(Authentication authentication) {
        User user = userRepository.findByEmail(authentication.getName());
        if (user == null) throw new IllegalArgumentException("User account not found");
        return user;
    }
}
