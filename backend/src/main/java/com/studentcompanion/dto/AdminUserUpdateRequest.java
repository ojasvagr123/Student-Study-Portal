package com.studentcompanion.dto;

import com.studentcompanion.model.Role;
import jakarta.validation.constraints.NotNull;

public record AdminUserUpdateRequest(@NotNull Role role, boolean active) {}
