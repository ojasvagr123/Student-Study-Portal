package com.studentcompanion.dto;

import com.studentcompanion.model.CareerGoal;
import com.studentcompanion.model.Role;
import com.studentcompanion.model.User;

public record UserResponse(
        Long id,
        String name,
        String email,
        String branch,
        Integer currentSemester,
        CareerGoal goal,
        String enrollmentNumber,
        String gender,
        String leetcodeUrl,
        String githubUrl,
        String skills,
        Role role,
        boolean active) {
    public static UserResponse from(User user) {
        return new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getBranch(),
                user.getCurrentSemester(), user.getGoal(), user.getEnrollmentNumber(), user.getGender(),
                user.getLeetcodeUrl(), user.getGithubUrl(), user.getSkills(), user.getRole(), user.isActive());
    }
}
