package com.studentcompanion.dto;

import java.time.LocalDate;
import com.studentcompanion.model.CareerGoal;
import jakarta.validation.constraints.*;

public class RegistrationRequest {
    @NotBlank @Size(min = 2, max = 100)
    private String name;
    @NotBlank @Email
    private String email;
    @NotBlank @Size(min = 8, max = 72)
    private String password;

    @NotBlank private String enrollmentNumber;
    @NotBlank private String branch;
    @NotNull @Min(1) @Max(12) private Integer currentSemester;
    private String gender;
    @NotNull private CareerGoal goal;
    private String otherGoal;
    private String leetcodeUrl;
    private String githubUrl;
    private String skills;
    private LocalDate dateOfBirth;

    // Constructors
    public RegistrationRequest() {}

    public RegistrationRequest(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Getters and Setters for all fields

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEnrollmentNumber() {
        return enrollmentNumber;
    }
    public void setEnrollmentNumber(String enrollmentNumber) {
        this.enrollmentNumber = enrollmentNumber;
    }

    public String getBranch() {
        return branch;
    }
    public void setBranch(String branch) {
        this.branch = branch;
    }

    public Integer getCurrentSemester() {
        return currentSemester;
    }
    public void setCurrentSemester(Integer currentSemester) {
        this.currentSemester = currentSemester;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public CareerGoal getGoal() { return goal; }
    public void setGoal(CareerGoal goal) { this.goal = goal; }


    public String getOtherGoal() {
        return otherGoal;
    }
    public void setOtherGoal(String otherGoal) {
        this.otherGoal = otherGoal;
    }

    public String getLeetcodeUrl() {
        return leetcodeUrl;
    }
    public void setLeetcodeUrl(String leetcodeUrl) {
        this.leetcodeUrl = leetcodeUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }
    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getSkills() {
        return skills;
    }
    public void setSkills(String skills) {
        this.skills = skills;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
