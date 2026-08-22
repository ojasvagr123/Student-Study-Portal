package com.studentcompanion;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.head;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(properties = {
        "spring.datasource.url=jdbc:h2:mem:studify;MODE=PostgreSQL;DB_CLOSE_DELAY=-1",
        "spring.datasource.driver-class-name=org.h2.Driver",
        "spring.datasource.username=sa",
        "spring.datasource.password=",
        "spring.jpa.database-platform=org.hibernate.dialect.H2Dialect",
        "spring.jpa.hibernate.ddl-auto=create-drop",
        "spring.flyway.enabled=false",
        "jwt.secret=test-secret-key-that-is-longer-than-thirty-two-bytes",
        "app.cors.allowed-origins=http://localhost:5173",
        "app.upload-dir=build/test-uploads",
        "app.local-uploads-enabled=false",
        "app.bootstrap-admin.enabled=false"
})
@AutoConfigureMockMvc
class ApplicationContextTest {
    private static final String ACTUATOR_JSON = "application/vnd.spring-boot.actuator.v3+json";

    @Autowired
    private MockMvc mockMvc;

    @Test
    void contextLoads() {}

    @Test
    void deploymentHealthCheckSupportsGetAndHead() throws Exception {
        mockMvc.perform(get("/actuator/health"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(ACTUATOR_JSON));

        mockMvc.perform(head("/actuator/health"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(ACTUATOR_JSON));
    }

    @Test
    void rootProbeSupportsGetAndHeadAsJson() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON));

        mockMvc.perform(head("/"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON));
    }
}
