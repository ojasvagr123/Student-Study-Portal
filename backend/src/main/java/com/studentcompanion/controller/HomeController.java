package com.studentcompanion.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> homePage(Authentication authentication) {
        boolean authenticated = authentication != null
                && authentication.isAuthenticated()
                && !"anonymousUser".equals(authentication.getName());

        return Map.of(
                "service", "Studify API",
                "status", "UP",
                "authenticated", authenticated,
                "user", authenticated ? authentication.getName() : "anonymous",
                "endpoints", List.of(
                        "POST /api/auth/login",
                        "POST /api/auth/register",
                        "GET /actuator/health"));
    }
}
