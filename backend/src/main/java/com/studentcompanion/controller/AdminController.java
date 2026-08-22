package com.studentcompanion.controller;

import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.studentcompanion.dto.AdminUserUpdateRequest;
import com.studentcompanion.dto.UserResponse;
import com.studentcompanion.model.*;
import com.studentcompanion.repository.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final UserRepository users; private final BranchRepository branches;
    private final SemesterRepository semesters; private final SubjectRepository subjects;
    private final UnitRepository units; private final ResourceRepository resources;
    private final CareerResourceRepository careerResources; private final ContributionRepository contributions;
    private final CommentRepository comments;

    public AdminController(UserRepository users, BranchRepository branches, SemesterRepository semesters,
            SubjectRepository subjects, UnitRepository units, ResourceRepository resources,
            CareerResourceRepository careerResources, ContributionRepository contributions, CommentRepository comments) {
        this.users = users; this.branches = branches; this.semesters = semesters; this.subjects = subjects;
        this.units = units; this.resources = resources; this.careerResources = careerResources;
        this.contributions = contributions; this.comments = comments;
    }

    @GetMapping("/stats") public Map<String, Long> stats() {
        return Map.of("users", users.count(), "subjects", subjects.count(), "resources", resources.count(),
                "careerResources", careerResources.count(), "contributions", contributions.count(), "comments", comments.count());
    }
    @GetMapping("/users") public List<UserResponse> users() { return users.findAll().stream().map(UserResponse::from).toList(); }
    @PutMapping("/users/{id}") public UserResponse updateUser(@PathVariable Long id,
            @Valid @RequestBody AdminUserUpdateRequest request, Authentication auth) {
        User user = users.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        if (user.getEmail().equalsIgnoreCase(auth.getName()) && request.role() != Role.ADMIN)
            throw new IllegalArgumentException("You cannot remove your own admin role");
        user.setRole(request.role()); user.setActive(request.active()); return UserResponse.from(users.save(user));
    }
    @DeleteMapping("/users/{id}") public ResponseEntity<Void> deleteUser(@PathVariable Long id, Authentication auth) {
        User user = users.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        if (user.getEmail().equalsIgnoreCase(auth.getName())) throw new IllegalArgumentException("You cannot delete your own account");
        users.delete(user); return ResponseEntity.noContent().build();
    }

    @GetMapping("/branches") public List<Branch> branches() { return branches.findAll(); }
    @PostMapping("/branches") public Branch branch(@Valid @RequestBody BranchRequest r) {
        Branch x = new Branch(); x.setName(r.name()); x.setCode(r.code().toUpperCase()); return branches.save(x); }
    @DeleteMapping("/branches/{id}") public void deleteBranch(@PathVariable Long id) { branches.deleteById(id); }
    @GetMapping("/semesters") public List<Semester> semesters() { return semesters.findAll(); }
    @PostMapping("/semesters") public Semester semester(@Valid @RequestBody NameRequest r) {
        Semester x = new Semester(); x.setName(r.name()); return semesters.save(x); }
    @DeleteMapping("/semesters/{id}") public void deleteSemester(@PathVariable Long id) { semesters.deleteById(id); }
    @GetMapping("/subjects") public List<Subject> subjects() { return subjects.findAll(); }
    @PostMapping("/subjects") public Subject subject(@Valid @RequestBody SubjectRequest r) {
        Subject x = new Subject(); x.setName(r.name()); x.setCode(r.code()); x.setSemester(r.semester());
        x.setBranch(branches.findById(r.branchId()).orElseThrow(() -> new IllegalArgumentException("Branch not found"))); return subjects.save(x); }
    @DeleteMapping("/subjects/{id}") public void deleteSubject(@PathVariable Long id) { subjects.deleteById(id); }
    @GetMapping("/units") public List<Unit> units() { return units.findAll(); }
    @PostMapping("/units") public Unit unit(@Valid @RequestBody UnitRequest r) {
        Unit x = new Unit(); x.setName(r.name()); x.setSubject(subjects.findById(r.subjectId()).orElseThrow(() -> new IllegalArgumentException("Subject not found"))); return units.save(x); }
    @DeleteMapping("/units/{id}") public void deleteUnit(@PathVariable Long id) { units.deleteById(id); }
    @GetMapping("/resources") public List<Resource> resources() { return resources.findAll(); }
    @PostMapping("/resources") public Resource resource(@Valid @RequestBody ResourceRequest r) {
        Resource x = new Resource(); x.setTitle(r.title()); x.setUrl(r.url()); x.setType(r.type());
        x.setUnit(units.findById(r.unitId()).orElseThrow(() -> new IllegalArgumentException("Unit not found"))); return resources.save(x); }
    @DeleteMapping("/resources/{id}") public void deleteResource(@PathVariable Long id) { resources.deleteById(id); }
    @GetMapping("/career-resources") public List<CareerResource> careerResources() { return careerResources.findAll(); }
    @PostMapping("/career-resources") public CareerResource career(@Valid @RequestBody CareerRequest r) {
        CareerResource x = new CareerResource(); x.setTitle(r.title()); x.setUrl(r.url()); x.setType(r.type()); x.setGoal(r.goal()); return careerResources.save(x); }
    @DeleteMapping("/career-resources/{id}") public void deleteCareer(@PathVariable Long id) { careerResources.deleteById(id); }

    public record NameRequest(@NotBlank String name) {}
    public record BranchRequest(@NotBlank String name, @NotBlank String code) {}
    public record SubjectRequest(@NotBlank String name, @NotBlank String code, @Min(1) int semester, @NotNull Long branchId) {}
    public record UnitRequest(@NotBlank String name, @NotNull Long subjectId) {}
    public record ResourceRequest(@NotBlank String title, @NotBlank String url, @NotNull ResourceType type, @NotNull Long unitId) {}
    public record CareerRequest(@NotBlank String title, @NotBlank String url, @NotNull ResourceType type, @NotNull CareerGoal goal) {}
}
