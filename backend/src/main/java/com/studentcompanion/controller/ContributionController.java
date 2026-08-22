package com.studentcompanion.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentcompanion.model.Contribution;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.ContributionRepository;
import com.studentcompanion.repository.UserRepository;
import com.studentcompanion.dto.ContributionDTO;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/contributions")
public class ContributionController {
@Autowired
private ContributionRepository contributionRepository;

@Autowired
private UserRepository userRepository;

// @Autowired
// private CommentRepository commentRepository;

@PostMapping("/add")
public ResponseEntity<?> addContribution(@Valid @RequestBody ContributionDTO dto, Authentication authentication) {
    try {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        Contribution contribution = new Contribution();
        contribution.setTitle(dto.getTitle());
        contribution.setDescription(dto.getDescription());
        contribution.setType(dto.getType());
        contribution.setSubject(dto.getSubject());
        contribution.setVisibility(dto.getVisibility());
        contribution.setUrl(dto.getUrl());
        contribution.setUser(user);
        contribution.setCreatedAt(LocalDateTime.now());

        contributionRepository.save(contribution);
        return ResponseEntity.ok("✅ Contribution saved");
    } catch (Exception e) {
        return ResponseEntity.internalServerError().body("Unable to save contribution");
    }
}




@GetMapping("/my")
public ResponseEntity<?> getUserContributions(Authentication authentication) {
    try {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        List<Contribution> list = contributionRepository.findByUser(user);
        return ResponseEntity.ok(list);
    } catch (Exception e) {
        return ResponseEntity.internalServerError().body("Unable to fetch contributions");
    }
}

@GetMapping("/{id}/upvotes")
public ResponseEntity<?> getUpvotes(@PathVariable Long id) {
Contribution c = contributionRepository.findById(id).orElseThrow();
return ResponseEntity.ok(c.getUpvotes());
}

@GetMapping("/{id}/downvotes")
public ResponseEntity<?> getDownvotes(@PathVariable Long id) {
Contribution c = contributionRepository.findById(id).orElseThrow();
return ResponseEntity.ok(c.getDownvotes());
}

@GetMapping("/{id}/bookmarks")
public ResponseEntity<?> getBookmarks(@PathVariable Long id) {
Contribution c = contributionRepository.findById(id).orElseThrow();
return ResponseEntity.ok(c.getBookmarks());
}


}
