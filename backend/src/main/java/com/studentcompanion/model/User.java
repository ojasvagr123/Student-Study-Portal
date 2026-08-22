package com.studentcompanion.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @JsonIgnore
    private String password;

    private boolean isActive = true;
    private boolean emailVerified = false;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.STUDENT;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();

    private String branch;

    @Column(unique = true)
    private String enrollmentNumber;

    private Integer currentSemester;
    private String gender;
    
    @Enumerated(EnumType.STRING)
    private CareerGoal goal;

    private String otherGoal;
    private String leetcodeUrl;
    private String githubUrl;
    private String skills;
    private LocalDate dateOfBirth;

    @ManyToOne
    @JoinColumn(name = "semester_id")
    private Semester semester;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Contribution> contributions;

   

    // --- Getters and Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }

    public boolean isEmailVerified() { return emailVerified; }
    public void setEmailVerified(boolean emailVerified) { this.emailVerified = emailVerified; }

    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public String getBranch() { return branch; }
    public void setBranch(String branch) { this.branch = branch; }

    public String getEnrollmentNumber() { return enrollmentNumber; }
    public void setEnrollmentNumber(String enrollmentNumber) { this.enrollmentNumber = enrollmentNumber; }

    public Integer getCurrentSemester() { return currentSemester; }
    public void setCurrentSemester(Integer currentSemester) { this.currentSemester = currentSemester; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public CareerGoal getGoal() { return goal; }
    public void setGoal(CareerGoal goal) { this.goal = goal; }

    public String getOtherGoal() { return otherGoal; }
    public void setOtherGoal(String otherGoal) { this.otherGoal = otherGoal; }

    public String getLeetcodeUrl() { return leetcodeUrl; }
    public void setLeetcodeUrl(String leetcodeUrl) { this.leetcodeUrl = leetcodeUrl; }

    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }

    public String getSkills() { return skills; }
    public void setSkills(String skills) { this.skills = skills; }

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public Semester getSemester() { return semester; }
    public void setSemester(Semester semester) { this.semester = semester; }

    public List<Contribution> getContributions() { return contributions; }
    public void setContributions(List<Contribution> contributions) { this.contributions = contributions; }

}
