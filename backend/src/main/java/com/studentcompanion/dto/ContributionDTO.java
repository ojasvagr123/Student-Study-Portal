package com.studentcompanion.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class ContributionDTO {
    @NotBlank @Size(max = 200) public String title;
    @NotBlank @Size(max = 2000) public String description;
    @NotBlank @Size(max = 50) public String type;
    @NotBlank @Size(max = 100) public String subject;
    @NotBlank @Pattern(regexp = "public|private") public String visibility;
    @NotBlank @Size(max = 1000) public String url;

    // Optional: Add getters & setters if needed
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getVisibility() { return visibility; }
    public void setVisibility(String visibility) { this.visibility = visibility; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
}
