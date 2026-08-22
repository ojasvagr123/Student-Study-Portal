package com.studentcompanion.dto;

import com.studentcompanion.model.CareerGoal;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ProfileUpdateRequest(
        @NotBlank @Size(max = 100) String name,
        @NotBlank @Size(max = 20) String branch,
        @Min(1) @Max(12) Integer currentSemester,
        CareerGoal goal,
        @Size(max = 500) String leetcodeUrl,
        @Size(max = 500) String githubUrl,
        @Size(max = 1000) String skills) {}
