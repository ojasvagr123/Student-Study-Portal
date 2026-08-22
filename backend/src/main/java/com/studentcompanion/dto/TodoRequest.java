package com.studentcompanion.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record TodoRequest(@NotBlank @Size(max = 500) String text, boolean done) {}
