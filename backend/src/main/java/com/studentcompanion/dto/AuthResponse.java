package com.studentcompanion.dto;
import com.studentcompanion.model.CareerGoal;
import com.studentcompanion.model.Role;

public class AuthResponse {
    private String token;
    private String name;
    private String email;
    private String branch;
    private Integer currentSemester;
    private CareerGoal goal;
    private String enrollmentNumber;
    private Role role;

    public AuthResponse() {}

    public AuthResponse(String token, String name, String email, String branch, Integer currentSemester, CareerGoal goal, String enrollmentNumber, Role role) {
        this.token = token;
        this.name = name;
        this.email = email;
        this.branch = branch;
        this.currentSemester = currentSemester;
        this.goal = goal;
        this.enrollmentNumber = enrollmentNumber;
        this.role = role;
    }

    // Getters and setters
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getBranch() { return branch; }
    public void setBranch(String branch) { this.branch = branch; }

    public Integer getCurrentSemester() { return currentSemester; }
    public void setCurrentSemester(Integer currentSemester) { this.currentSemester = currentSemester; }

    public CareerGoal getGoal() {
        return goal;
    }

    public void setGoal(CareerGoal goal) {
        this.goal = goal;
    }
    public String getEnrollmentNumber() {
        return enrollmentNumber;
    }
    public void setEnrollmentNumber(String enrollmentNumber) {
        this.enrollmentNumber = enrollmentNumber;   
    }
    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

}
