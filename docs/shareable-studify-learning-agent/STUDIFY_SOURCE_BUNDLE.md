# Studify sanitized source bundle

Generated from the repository for learning, code walkthroughs, and interview preparation. Secret-bearing runtime configuration is intentionally excluded. Verify historical or deployment claims against the current repository.

## backend/build.gradle

```groovy
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.1.0'
    id 'io.spring.dependency-management' version '1.1.0'
}

group = 'com.studentcompanion'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = '17'

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'org.springframework.boot:spring-boot-starter-validation'

    // JWT Dependencies
    implementation 'io.jsonwebtoken:jjwt-api:0.11.5'
    runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.11.5'
    runtimeOnly 'io.jsonwebtoken:jjwt-jackson:0.11.5'

    // Password Encoding
    implementation 'org.springframework.security:spring-security-crypto'

    // ✅ PostgreSQL driver
    runtimeOnly 'org.postgresql:postgresql:42.6.0'

    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.springframework.security:spring-security-test'
}

```

## backend/settings.gradle

```groovy
rootProject.name = 'backend'

```

## backend/src/main/java/com/studentcompanion/config/QuizDataSeeder.java

```java
package com.studentcompanion.config;

import com.studentcompanion.model.CareerGoal;
import com.studentcompanion.model.QuizQuestion;
import com.studentcompanion.repository.QuizQuestionRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class QuizDataSeeder {

    @Autowired
    private QuizQuestionRepository quizRepo;

    @PostConstruct
    public void seedData() {
        if (quizRepo.count() > 0) return; // Avoid duplicate seeding on restart

        // Example GATE Question
        quizRepo.save(new QuizQuestion(
                "Which data structure is used in a recursive algorithm call stack?",
                List.of("Queue", "Array", "Stack", "LinkedList"),
                "Stack",
                CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "In a connected graph with no cycles, how many edges are there in terms of vertices V?",
            List.of("V", "V-1", "V+1", "2V-1"),
            "V-1",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "What is the worst-case time complexity of QuickSort?",
            List.of("O(n)", "O(n log n)", "O(n^2)", "O(log n)"),
            "O(n^2)",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which of the following is a context-free language not regular?",
            List.of("a^n b^n", "a*b*", "(a|b)*", "ab*"),
            "a^n b^n",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which traversal of a binary search tree results in sorted order?",
            List.of("Preorder", "Postorder", "Inorder", "Level-order"),
            "Inorder",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "The minimum number of gates required to implement a full adder is?",
            List.of("4", "5", "6", "7"),
            "5",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which of the following is not a stable sorting algorithm?",
            List.of("Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"),
            "Selection Sort",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "In which layer of the OSI model does the TCP protocol operate?",
            List.of("Application", "Transport", "Network", "Data Link"),
            "Transport",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which of the following is used to prevent deadlock in operating systems?",
            List.of("Mutex", "Banker's Algorithm", "Paging", "Segmentation"),
            "Banker's Algorithm",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which of the following data structures is used in Breadth First Search?",
            List.of("Stack", "Queue", "Priority Queue", "HashMap"),
            "Queue",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "What is the output of the expression 4 & 1 in C?",
            List.of("0", "1", "2", "4"),
            "0",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which of the following is a page replacement algorithm?",
            List.of("FIFO", "LRU", "Optimal", "All of the above"),
            "All of the above",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which addressing mode is used in the instruction 'MOV AL, [BX]'?",
            List.of("Immediate", "Direct", "Register Indirect", "Indexed"),
            "Register Indirect",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which of the following is not an NP-complete problem?",
            List.of("Traveling Salesman", "3-SAT", "Hamiltonian Path", "Binary Search"),
            "Binary Search",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which protocol is used to assign IP addresses dynamically?",
            List.of("DNS", "DHCP", "FTP", "HTTP"),
            "DHCP",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "What is the size of an IPv6 address?",
            List.of("32 bits", "64 bits", "128 bits", "256 bits"),
            "128 bits",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which one of the following is used to measure cache performance?",
            List.of("Hit ratio", "Miss penalty", "Latency", "Page fault rate"),
            "Hit ratio",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which grammar is used to describe the syntax of programming languages?",
            List.of("Phrase Structure Grammar", "Context-Free Grammar", "Regular Grammar", "Unrestricted Grammar"),
            "Context-Free Grammar",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which among the following is an undecidable problem?",
            List.of("Tower of Hanoi", "Matrix Multiplication", "Halting Problem", "Binary Search"),
            "Halting Problem",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which memory is used to speed up access to frequently used data?",
            List.of("RAM", "ROM", "Cache", "Hard Disk"),
            "Cache",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which traversal of a binary tree uses recursion naturally?",
            List.of("Inorder", "Preorder", "Postorder", "All of the above"),
            "All of the above",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "What is the maximum number of nodes in a binary tree of height h?",
            List.of("2^h - 1", "2h", "h^2", "2h - 1"),
            "2^h - 1",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which of the following is a hashing collision resolution technique?",
            List.of("Linear Probing", "Binary Search", "AVL Rotation", "Depth First Search"),
            "Linear Probing",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "What is the worst-case time complexity of inserting in a binary search tree?",
            List.of("O(1)", "O(log n)", "O(n)", "O(n log n)"),
            "O(n)",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "Which of these is a greedy algorithm technique?",
            List.of("Prim’s Algorithm", "Floyd-Warshall", "Bellman-Ford", "Dijkstra with Negative Weights"),
            "Prim’s Algorithm",
            CareerGoal.GATE
        ));

        quizRepo.save(new QuizQuestion(
            "In a relational database, which operation is not part of relational algebra?",
            List.of("Union", "Intersection", "Division", "Update"),
            "Update",
            CareerGoal.GATE
        ));


        // Example CAT Question
        quizRepo.save(new QuizQuestion(
                "If the average of 5 numbers is 20, what is their total sum?",
                List.of("20", "100", "25", "200"),
                "100",
                CareerGoal.CAT
        ));

        // Example UPSC Question
        quizRepo.save(new QuizQuestion(
                "Who was the first Governor-General of India?",
                List.of("Lord Canning", "Warren Hastings", "Lord Mountbatten", "Lord Curzon"),
                "Warren Hastings",
                CareerGoal.UPSC
        ));

        // Example Placement Logical Reasoning Question
        quizRepo.save(new QuizQuestion(
                "Find the next number in the series: 2, 6, 12, 20, ?",
                List.of("30", "28", "32", "24"),
                "30",
                CareerGoal.PLACEMENT
        ));

        System.out.println("✅ Quiz questions seeded!");
    }
}

```

## backend/src/main/java/com/studentcompanion/config/SecurityConfig.java

```java
package com.studentcompanion.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.studentcompanion.filter.JwtAuthenticationFilter;
import com.studentcompanion.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    // Password Encoder
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // DAO Auth Provider
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    // Authentication Manager
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    // Security Filter Chain
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                // Publicly accessible endpoints
                .requestMatchers(
                    "/api/auth/**",
                    "/api/public/**",
                    "/api/todos/**",
                    "/", "/favicon.ico", "/css/**", "/js/**", "/images/**"
                ).permitAll()

                // Secure endpoints
                .requestMatchers("/api/users/profile").authenticated()
                .requestMatchers("/api/comments/**").authenticated() // 👈 Required for comment POST
                
                .anyRequest().permitAll() // fallback
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    // CORS Configuration
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(List.of("http://localhost:3000", "http://localhost:5173"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

```

## backend/src/main/java/com/studentcompanion/config/WebConfig.java

```java
package com.studentcompanion.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/uploads/**")
        .addResourceLocations("file:" + System.getProperty("user.dir") + "/uploads/");
}

}

```

## backend/src/main/java/com/studentcompanion/controller/AdminController.java

```java
package com.studentcompanion.controller;

import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    // Add more admin-only endpoints here if needed
}

```

## backend/src/main/java/com/studentcompanion/controller/AuthController.java

```java
package com.studentcompanion.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentcompanion.dto.AuthRequest;
import com.studentcompanion.dto.AuthResponse;
import com.studentcompanion.dto.RegistrationRequest;
import com.studentcompanion.model.Role;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;
import com.studentcompanion.service.CustomUserDetailsService;
import com.studentcompanion.util.JwtUtil;



@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[A-Za-z0-9+_.-]+@(.+)$");

    // ---------- LOGIN ----------
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        } catch (BadCredentialsException e) {
    System.out.println("Bad credentials for: " + authRequest.getEmail());
    return ResponseEntity
            .status(HttpStatus.UNAUTHORIZED)
            .body(Collections.singletonMap("message", "Invalid email or password"));
}


        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getEmail());
        final String jwt = jwtUtil.generateToken(userDetails);
        User user = userRepository.findByEmail(authRequest.getEmail());
        return ResponseEntity.ok(new AuthResponse(
    jwt,
    user.getName(),
    user.getEmail(),
    user.getBranch(),
    user.getCurrentSemester(),
    user.getGoal(),
    user.getEnrollmentNumber()
));

    }

    // ---------- REGISTER ----------
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistrationRequest request) {
        System.out.println("🧪 Incoming registration request:");
    System.out.println("Name: " + request.getName());
    System.out.println("Email: " + request.getEmail());
    System.out.println("Password: " + request.getPassword());
    System.out.println("DOB: " + request.getDateOfBirth());
    System.out.println("Gender: " + request.getGender());
    System.out.println("Goal: " + request.getGoal());
    System.out.println("Current Sem: " + request.getCurrentSemester());

    Map<String, String> errors = validateRegistrationInput(request);
    if (!errors.isEmpty()) {
        System.out.println("❌ Validation Errors: " + errors);
        return ResponseEntity.badRequest().body(errors);
    }

        // Check if user already exists
        if (userRepository.findByEmail(request.getEmail()) != null) {
    System.out.println("Email already exists: " + request.getEmail());
    return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body(Collections.singletonMap("message", "Email already exists"));
}

        try {
    User user = new User();
    user.setName(request.getName());
    user.setEmail(request.getEmail());
    user.setPassword(passwordEncoder.encode(request.getPassword()));

    // Set additional fields
    user.setEnrollmentNumber(request.getEnrollmentNumber());
    user.setBranch(request.getBranch());
    user.setCurrentSemester(request.getCurrentSemester());
    user.setGender(request.getGender());
    user.setGoal(request.getGoal());
    user.setOtherGoal(request.getOtherGoal());
    user.setLeetcodeUrl(request.getLeetcodeUrl());
    user.setGithubUrl(request.getGithubUrl());
    user.setSkills(request.getSkills());
    user.setDateOfBirth(request.getDateOfBirth());
    user.setRole(Role.STUDENT);

    User savedUser = userRepository.save(user);

    UserDetails userDetails = userDetailsService.loadUserByUsername(savedUser.getEmail());
    String jwt = jwtUtil.generateToken(userDetails);

    return ResponseEntity.ok(new AuthResponse(
    jwt,
    user.getName(),
    user.getEmail(),
    user.getBranch(),
    user.getCurrentSemester(),
    user.getGoal(),
    user.getEnrollmentNumber()
));

} catch (Exception e) {
    System.err.println("Error during registration: " + e.getMessage());
    return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(Collections.singletonMap("message", "Something went wrong during registration"));
}

    }

    // ---------- INPUT VALIDATION ----------
    private Map<String, String> validateRegistrationInput(RegistrationRequest request) {
        Map<String, String> errors = new HashMap<>();

        if (request.getName() == null || request.getName().trim().isEmpty()) {
            errors.put("name", "Name is required");
        } else if (request.getName().length() < 2) {
            errors.put("name", "Name must be at least 2 characters");
        }

        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            errors.put("email", "Email is required");
        } else if (!EMAIL_PATTERN.matcher(request.getEmail()).matches()) {
            errors.put("email", "Invalid email format");
        }

        if (request.getPassword() == null || request.getPassword().isEmpty()) {
            errors.put("password", "Password is required");
        } else if (request.getPassword().length() < 6) {
            errors.put("password", "Password must be at least 6 characters");
        } else if (!isPasswordStrong(request.getPassword())) {
            errors.put("password", "Password must contain at least one letter and one number");
        }

        return errors;
    }

    private boolean isPasswordStrong(String password) {
        return password.matches(".*[a-zA-Z].*") && password.matches(".*[0-9].*");
    }

    // ---------- TEST ----------
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Auth controller is working!");
    }
}


```

## backend/src/main/java/com/studentcompanion/controller/CareerController.java

```java
package com.studentcompanion.controller;

import com.studentcompanion.model.*;
import com.studentcompanion.repository.CareerResourceRepository;
import com.studentcompanion.repository.StriverTopicRepository;
import com.studentcompanion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/career")
@CrossOrigin(origins = "*")
public class CareerController {

    @Autowired
    private CareerResourceRepository careerResourceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StriverTopicRepository striverTopicRepository;

    // 🎯 Get resources for a specific goal
    @GetMapping("/{goal}")
    public ResponseEntity<?> getCareerResourcesByGoal(@PathVariable("goal") CareerGoal goal) {
        List<CareerResource> all = careerResourceRepository.findByGoal(goal);
        return ResponseEntity.ok(all);
    }

    // 🎯 Get filtered resources by goal and type
    @GetMapping("/{goal}/{type}")
    public ResponseEntity<?> getCareerResourcesByGoalAndType(
            @PathVariable("goal") CareerGoal goal,
            @PathVariable("type") ResourceType type
    ) {
        List<CareerResource> list = careerResourceRepository.findByGoalAndType(goal, type);
        return ResponseEntity.ok(list);
    }

    // ✍️ Admin Upload Career Resource
    @PostMapping("/admin/upload")
    public ResponseEntity<?> uploadCareerResource(@RequestBody CareerResource resource) {
        return ResponseEntity.ok(careerResourceRepository.save(resource));
    }

    // ✅ Existing: Placement progress (Striver)
    @GetMapping("/placement/progress")
    public ResponseEntity<?> getStriverProgress(Authentication authentication) {
        User user = userRepository.findByEmail(authentication.getName());

        if (user == null) {
            return ResponseEntity.status(401).body(Collections.singletonMap("error", "User not found"));
        }

        List<StriverTopic> topics = striverTopicRepository.findByUser(user);
        if (topics.isEmpty()) {
            List<StriverTopic> defaultTopics = getDefaultStriverTopics(user);
            striverTopicRepository.saveAll(defaultTopics);
            return ResponseEntity.ok(defaultTopics);
        }

        return ResponseEntity.ok(topics);
    }

    // ✅ Mark Striver topic as attempted
    @PostMapping("/placement/attempt")
    public ResponseEntity<?> markTopicAsAttempted(@RequestBody Map<String, String> payload, Authentication authentication) {
        String topic = payload.get("topic");
        String link = payload.get("link");

        if (topic == null || topic.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Topic is required"));
        }

        User user = userRepository.findByEmail(authentication.getName());

        if (user == null) {
            return ResponseEntity.status(401).body(Collections.singletonMap("error", "User not found"));
        }

        Optional<StriverTopic> existing = striverTopicRepository.findByUserAndTopic(user, topic);

        StriverTopic st = existing.orElse(new StriverTopic());
        st.setUser(user);
        st.setTopic(topic);
        st.setLink(link);
        st.setAttempted(true);

        striverTopicRepository.save(st);
        return ResponseEntity.ok().build();
    }

    // 🧭 Current Goal
    @GetMapping("/goal")
    public ResponseEntity<Map<String, String>> getUserGoal(Authentication authentication) {
        User user = userRepository.findByEmail(authentication.getName());
        String goal = (user != null && user.getGoal() != null) ? user.getGoal().name() : "NOT_SET";
        return ResponseEntity.ok(Collections.singletonMap("goal", goal));
    }

    // 🔧 Defaults for placement
    private List<StriverTopic> getDefaultStriverTopics(User user) {
        return List.of(
                createTopic(user, "Arrays - Easy", "https://leetcode.com/tag/array/"),
                createTopic(user, "Two Pointers", "https://leetcode.com/tag/two-pointers/"),
                createTopic(user, "Binary Search", "https://leetcode.com/tag/binary-search/"),
                createTopic(user, "Sliding Window", "https://leetcode.com/tag/sliding-window/"),
                createTopic(user, "Linked List", "https://leetcode.com/tag/linked-list/"),
                createTopic(user, "Stacks", "https://leetcode.com/tag/stack/"),
                createTopic(user, "Queues", "https://leetcode.com/tag/queue/"),
                createTopic(user, "Trees", "https://leetcode.com/tag/tree/"),
                createTopic(user, "Graphs", "https://leetcode.com/tag/graph/")
        );
    }

    private StriverTopic createTopic(User user, String topic, String link) {
        StriverTopic st = new StriverTopic();
        st.setUser(user);
        st.setTopic(topic);
        st.setLink(link);
        st.setAttempted(false);
        return st;
    }
}

```

## backend/src/main/java/com/studentcompanion/controller/CommentController.java

```java
package com.studentcompanion.controller;
import com.studentcompanion.model.Comment;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.CommentRepository;
import com.studentcompanion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.studentcompanion.dto.CommentRequest;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "*")
public class CommentController {

    @Autowired private CommentRepository commentRepository;
    @Autowired private UserRepository userRepository;

   
    @PostMapping("/{type}/{id}")
    public ResponseEntity<?> addComment(@PathVariable String type,
                                        @PathVariable Long id,
                                        @RequestBody CommentRequest commentRequest,
                                        Authentication authentication) {

        String email = authentication.getName();
        System.out.println("🔐 Authenticated user email: " + email);
        System.out.println("📝 Incoming comment text: " + commentRequest.getCommentText());

        User user = userRepository.findByEmail(email);
        if (user == null) {
            System.out.println("❌ User not found for email: " + email);
            return ResponseEntity.status(401).body("User not found");
        }

        if (commentRequest.getCommentText() == null || commentRequest.getCommentText().trim().isEmpty()) {
            System.out.println("❌ Comment text is null or empty");
            return ResponseEntity.badRequest().body("Comment text cannot be empty");
        }

        Comment comment = new Comment();
        comment.setUser(user);
        comment.setContextType(type.toUpperCase());
        comment.setContextId(id);
        comment.setTimestamp(LocalDateTime.now());
        comment.setCommentText(commentRequest.getCommentText());

        Comment saved = commentRepository.save(comment);
        System.out.println("✅ Comment saved: ID=" + saved.getId() + " by " + user.getEmail());

        return ResponseEntity.ok(saved);
    }


    @GetMapping("/{type}/{id}")
    public ResponseEntity<?> getComments(@PathVariable String type, @PathVariable Long id) {
        return ResponseEntity.ok(commentRepository.findByContextTypeAndContextIdOrderByTimestampDesc(type.toUpperCase(), id));
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUserComments(Authentication authentication) {
        User user = userRepository.findByEmail(authentication.getName());
        return ResponseEntity.ok(commentRepository.findByUser(user));
    }
}

```

## backend/src/main/java/com/studentcompanion/controller/ContributionController.java

```java
package com.studentcompanion.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentcompanion.model.Contribution;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.ContributionRepository;
import com.studentcompanion.repository.UserRepository;
import com.studentcompanion.dto.ContributionDTO;

@RestController
@RequestMapping("/api/contributions")
@CrossOrigin(origins = "*")
public class ContributionController {
@Autowired
private ContributionRepository contributionRepository;

@Autowired
private UserRepository userRepository;

// @Autowired
// private CommentRepository commentRepository;

@PostMapping("/add")
public ResponseEntity<?> addContribution(@RequestBody ContributionDTO dto, Authentication authentication) {
    try {
        String email = (authentication != null) ? authentication.getName() : "agrawalnidhi241@gmail.com";
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        Contribution contribution = new Contribution();
        contribution.setTitle(dto.getTitle());
        contribution.setDescription(dto.getDescription());
        contribution.setType(dto.getType());
        contribution.setSubject(dto.getSubject());
        contribution.setVisibility(dto.getVisibility());
        contribution.setUrl(dto.getUrl());
        contribution.setUser(user);
        contribution.setCreatedAt(LocalDateTime.now());

        contributionRepository.save(contribution);
        return ResponseEntity.ok("✅ Contribution saved");
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.internalServerError().body("❌ Server Error: " + e.getMessage());
    }
}




@GetMapping("/my")
public ResponseEntity<?> getUserContributions(Authentication authentication) {
    try {
        String email = (authentication != null) ? authentication.getName() : "agrawalnidhi241@gmail.com";
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        List<Contribution> list = contributionRepository.findByUser(user);
        return ResponseEntity.ok(list);
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.internalServerError().body("❌ Failed to fetch contributions: " + e.getMessage());
    }
}

@GetMapping("/{id}/upvotes")
public ResponseEntity<?> getUpvotes(@PathVariable Long id) {
Contribution c = contributionRepository.findById(id).orElseThrow();
return ResponseEntity.ok(c.getUpvotes());
}

@GetMapping("/{id}/downvotes")
public ResponseEntity<?> getDownvotes(@PathVariable Long id) {
Contribution c = contributionRepository.findById(id).orElseThrow();
return ResponseEntity.ok(c.getDownvotes());
}

@GetMapping("/{id}/bookmarks")
public ResponseEntity<?> getBookmarks(@PathVariable Long id) {
Contribution c = contributionRepository.findById(id).orElseThrow();
return ResponseEntity.ok(c.getBookmarks());
}


}
```

## backend/src/main/java/com/studentcompanion/controller/HomeController.java

```java
package com.studentcompanion.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    // Home page - shows different content based on authentication status
    @GetMapping("/")
    @ResponseBody
    public String homePage() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        // Check if user is authenticated (not anonymous)
        if (authentication != null && authentication.isAuthenticated() 
            && !authentication.getName().equals("anonymousUser")) {
            return "✅ Logged in successfully! Welcome to the Student Companion Platform, " + authentication.getName() + "!";
        } else {
            return """
                🏠 Welcome to Student Companion Platform
                
                📋 To login: POST to /api/auth/login with email and password
                📝 To register: POST to /api/auth/register with name, email and password
                
                Public pages:
                • /login - Login page
                • /register - Registration page
                • /api/auth/test - Test endpoint
                """;
        }
    }

    // Public login page - no authentication required
    @GetMapping("/login")
    @ResponseBody
    public String loginPage() {
        return """
            📋 Login to Student Companion Platform
            
            Send POST request to: /api/auth/login
            
            Request body:
            {
                "email": "your.email@example.com",
                "password": "yourpassword"
            }
            
            You'll receive a JWT token in response.
            """;
    }

    // Public registration page - no authentication required  
    @GetMapping("/register")
    @ResponseBody
    public String registerPage() {
        return """
            📝 Register for Student Companion Platform
            
            Send POST request to: /api/auth/register
            
            Request body:
            {
                "name": "Your Name",
                "email": "your.email@example.com",
                "password": "yourpassword"
            }
            
            You'll receive a JWT token in response.
            """;
    }
}
```

## backend/src/main/java/com/studentcompanion/controller/InternalController.java

```java
package com.studentcompanion.controller;

import com.studentcompanion.model.Role;
import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/internal")
@CrossOrigin(origins = "*")
public class InternalController {

    @Autowired
    private UserRepository userRepository;

    @PutMapping("/promote-to-admin")
    public ResponseEntity<?> promoteToAdmin(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        user.setRole(Role.ADMIN); // ⬅️ Set to admin manually
        userRepository.save(user);
        return ResponseEntity.ok("User promoted to ADMIN");
    }
}

```

## backend/src/main/java/com/studentcompanion/controller/QuizController.java

```java
package com.studentcompanion.controller;

import com.studentcompanion.dto.QuizSubmissionDTO;
import com.studentcompanion.model.CareerGoal;
import com.studentcompanion.model.QuizQuestion;
import com.studentcompanion.repository.QuizQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = "*")
public class QuizController {

    @Autowired
    private QuizQuestionRepository quizQuestionRepository;

    // ✅ Fetch 20 random questions by goal
    @GetMapping("/{goal}")
    public ResponseEntity<?> getQuizByGoal(@PathVariable String goal) {
        try {
            CareerGoal enumGoal = CareerGoal.valueOf(goal.toUpperCase());
            List<QuizQuestion> all = quizQuestionRepository.findRandomQuestionsByGoal(enumGoal);
            List<QuizQuestion> top20 = all.size() > 20 ? all.subList(0, 20) : all;

            return ResponseEntity.ok(top20);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                    .body(Collections.singletonMap("error", "Invalid career goal: " + goal));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError()
                    .body(Collections.singletonMap("error", "Server error while fetching quiz"));
        }
    }

    // ✅ Submit quiz answers and return score
    @PostMapping("/submit")
    public ResponseEntity<Map<String, Integer>> submitQuiz(@RequestBody List<QuizSubmissionDTO> submissions) {
        AtomicInteger correct = new AtomicInteger(0);
        int total = submissions.size();

        submissions.forEach(submission -> {
            quizQuestionRepository.findById(submission.getQuestionId()).ifPresent(question -> {
                if (question.getCorrectAnswer().equalsIgnoreCase(submission.getSelectedAnswer())) {
                    correct.incrementAndGet();
                }
            });
        });

        Map<String, Integer> result = new HashMap<>();
        result.put("correct", correct.get());
        result.put("wrong", total - correct.get());
        return ResponseEntity.ok(result);
    }
}

```

## backend/src/main/java/com/studentcompanion/controller/StudyResourceController.java

```java
package com.studentcompanion.controller;

import com.studentcompanion.model.*;
import com.studentcompanion.repository.UnitRepository;
import com.studentcompanion.service.StudyResourceService;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.studentcompanion.repository.PyqRepository;



import java.io.File;
import java.util.List;
import java.io.IOException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class StudyResourceController {

    @Autowired
    private StudyResourceService studyService;

    // 👨‍🎓 STUDENT: Fetch Semesters, Subjects, Units, Resources, PYQs, Comments
    @Autowired
    private UnitRepository unitRepository;



    @GetMapping("/semesters")
    public List<Semester> getSemesters() {
        return studyService.getAllSemesters();
    }

    @GetMapping("/semesters/{semester}/subjects")
    public List<Subject> getSubjects(@PathVariable int semester, @RequestParam String branch) {
        return studyService.getSubjectsBySemesterAndBranch(semester, branch);
    }


    @GetMapping("/subjects/{id}/units")
    public List<Unit> getUnits(@PathVariable Long id) {
        return studyService.getUnitsBySubject(id);
    }
    @GetMapping("/units/{id}")
    public ResponseEntity<Unit> getUnitById(@PathVariable Long id) {
        return unitRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }


    @GetMapping("/units/{id}/resources")
    public List<Resource> getResources(@PathVariable Long id) {
        return studyService.getResourcesByUnit(id);
    }

    @GetMapping("/units/{id}/pyqs")
    public List<Pyq> getPyqs(@PathVariable Long id) {
        return studyService.getPyqsByUnit(id);
    }

    @PostMapping("/admin/semesters")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Semester createSemester(@RequestBody Semester semester) {
        return studyService.createSemester(semester);
    }

    @PostMapping("/admin/subjects")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Subject createSubject(@RequestBody Subject subject) {
        return studyService.createSubject(subject);
    }

    @PostMapping("/admin/units")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Unit createUnit(@RequestBody Unit unit) {
        return studyService.createUnit(unit);
    }
    @PostMapping("/admin/resources/upload")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Resource> uploadPdfResource(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("unitId") Long unitId,
            @RequestParam("type") ResourceType type
    ) throws IOException {

    // ✅ Use absolute path
    String uploadDir = System.getProperty("user.dir") + "/uploads/";
    File dir = new File(uploadDir);
    if (!dir.exists()) dir.mkdirs();

    String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
    String filePath = uploadDir + fileName;

    file.transferTo(new File(filePath));

    Unit unit = unitRepository.findById(unitId)
            .orElseThrow(() -> new RuntimeException("Unit not found: " + unitId));

    Resource resource = new Resource();
    resource.setTitle(title);
    resource.setType(type);
    resource.setUnit(unit);
    resource.setUrl("/uploads/" + fileName); // This will be served by WebConfig

    Resource saved = studyService.createResource(resource);
    return ResponseEntity.ok(saved);
}

    
}

```

## backend/src/main/java/com/studentcompanion/controller/TestController.java

```java
package com.studentcompanion.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
public class TestController {

    // Accessible to any authenticated user
    @GetMapping("/hello")
    public String sayHello() {
        return "✅ Hello, authenticated user!";
    }

    // Accessible only to ROLE_ADMIN
    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminOnly() {
        return "🛡️ Hello, Admin!";
    }
}
```

## backend/src/main/java/com/studentcompanion/controller/TodoController.java

```java
package com.studentcompanion.controller;

import com.studentcompanion.model.Todo;
import com.studentcompanion.repository.TodoRepository;

import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

@PostConstruct
public void init() {
    System.out.println("✅ TodoController Loaded Successfully");
}
@GetMapping("/test")
public String testApi() {
    return "✅ Todo API Working";
}

    @Autowired
    private TodoRepository todoRepo;

    @GetMapping("/{userId}")
    public List<Todo> getTodosByUser(@PathVariable Long userId) {
        return todoRepo.findByUserId(userId);
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return todoRepo.save(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoRepo.deleteById(id);
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo updated) {
        Todo todo = todoRepo.findById(id).orElseThrow(() -> new RuntimeException("Todo not found"));
        todo.setText(updated.getText());
        todo.setDone(updated.isDone());
        return todoRepo.save(todo);
    }
}
```

## backend/src/main/java/com/studentcompanion/controller/UserController.java

```java
package com.studentcompanion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") // Restrict to frontend
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // 🔓 Public or Admin: Get all users
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 🔐 Get profile of currently authenticated user
@GetMapping("/profile")
public ResponseEntity<User> getProfile(Authentication authentication) {
    String email = authentication.getName();
    User user = userRepository.findByEmail(email);
    if (user == null) {
        return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user);
}


}

```

## backend/src/main/java/com/studentcompanion/dto/AuthRequest.java

```java
package com.studentcompanion.dto;

public class AuthRequest {
    private String email;
    private String password;

    public AuthRequest() {}

    public AuthRequest(String email, String password) {
        this.email = email;
        this.password = password;
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
}
```

## backend/src/main/java/com/studentcompanion/dto/AuthResponse.java

```java
package com.studentcompanion.dto;
import com.studentcompanion.model.CareerGoal;

public class AuthResponse {
    private String token;
    private String name;
    private String email;
    private String branch;
    private int currentSemester;
    private CareerGoal goal;
    private String enrollmentNumber;

    public AuthResponse() {}

    public AuthResponse(String token, String name, String email, String branch, int currentSemester, CareerGoal goal, String enrollmentNumber) {
        this.token = token;
        this.name = name;
        this.email = email;
        this.branch = branch;
        this.currentSemester = currentSemester;
        this.goal = goal;
        this.enrollmentNumber = enrollmentNumber;
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

    public int getCurrentSemester() { return currentSemester; }
    public void setCurrentSemester(int currentSemester) { this.currentSemester = currentSemester; }

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

}

```

## backend/src/main/java/com/studentcompanion/dto/CommentRequest.java

```java
package com.studentcompanion.dto;

public class CommentRequest {
    private String commentText;

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }
}

```

## backend/src/main/java/com/studentcompanion/dto/ContributionDTO.java

```java
package com.studentcompanion.dto;

public class ContributionDTO {
    public String title;
    public String description;
    public String type;
    public String subject;
    public String visibility;
    public String url;

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

```

## backend/src/main/java/com/studentcompanion/dto/ErrorResponse.java

```java
package com.studentcompanion.dto;

import java.util.Map;

public class ErrorResponse {
    private String message;
    private Map<String, String> fieldErrors;
    
    // Constructors
    public ErrorResponse() {}
    
    public ErrorResponse(String message) {
        this.message = message;
    }
    
    public ErrorResponse(Map<String, String> fieldErrors) {
        this.fieldErrors = fieldErrors;
    }
    
    public ErrorResponse(String message, Map<String, String> fieldErrors) {
        this.message = message;
        this.fieldErrors = fieldErrors;
    }
    
    // Getters and Setters
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public Map<String, String> getFieldErrors() {
        return fieldErrors;
    }
    
    public void setFieldErrors(Map<String, String> fieldErrors) {
        this.fieldErrors = fieldErrors;
    }
}
```

## backend/src/main/java/com/studentcompanion/dto/QuizSubmissionDTO.java

```java
package com.studentcompanion.dto;

public class QuizSubmissionDTO {
    private Long questionId;
    private String selectedAnswer;

    public Long getQuestionId() { return questionId; }

    public void setQuestionId(Long questionId) { this.questionId = questionId; }

    public String getSelectedAnswer() { return selectedAnswer; }

    public void setSelectedAnswer(String selectedAnswer) { this.selectedAnswer = selectedAnswer; }
}

```

## backend/src/main/java/com/studentcompanion/dto/RegistrationRequest.java

```java
package com.studentcompanion.dto;

import java.time.LocalDate;
import com.studentcompanion.model.CareerGoal;

public class RegistrationRequest {
    private String name;
    private String email;
    private String password;

    private String enrollmentNumber;
    private String branch;
    private Integer currentSemester;
    private String gender;
    private CareerGoal goal; 
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

```

## backend/src/main/java/com/studentcompanion/dto/StudyResourceResponse.java

```java
package com.studentcompanion.dto;

import com.studentcompanion.model.Resource;
import com.studentcompanion.model.Unit;

public class StudyResourceResponse {

    private Long id;
    private String title;
    private String url;
    private String type;
    private Long unitId;
    private String unitName;

    public static StudyResourceResponse from(Resource resource) {
        StudyResourceResponse response = new StudyResourceResponse();
        response.setId(resource.getId());
        response.setTitle(resource.getTitle());
        response.setUrl(resource.getUrl());
        response.setType(resource.getType() != null ? resource.getType().toString() : null);

        Unit unit = resource.getUnit();
        if (unit != null) {
            response.setUnitId(unit.getId());
            response.setUnitName(unit.getName());
        }

        return response;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public Long getUnitId() { return unitId; }
    public void setUnitId(Long unitId) { this.unitId = unitId; }

    public String getUnitName() { return unitName; }
    public void setUnitName(String unitName) { this.unitName = unitName; }
}

```

## backend/src/main/java/com/studentcompanion/filter/JwtAuthenticationFilter.java

```java
package com.studentcompanion.filter;

import com.studentcompanion.service.CustomUserDetailsService;
import com.studentcompanion.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    // List of public endpoints that don't need JWT validation
    private final List<String> publicEndpoints = Arrays.asList(
        "/login", 
        "/register", 
        "/api/auth/login", 
        "/api/auth/register",
        "/api/auth/test",
        "/api/users/register"
    );

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        
        String requestPath = request.getRequestURI();
        String method = request.getMethod();
        
        // Skip JWT validation for public endpoints
        if (isPublicEndpoint(requestPath)) {
            logger.debug("Skipping JWT validation for public endpoint: " + requestPath);
            filterChain.doFilter(request, response);
            return;
        }
        
        // For OPTIONS requests (CORS preflight), skip JWT validation
        if ("OPTIONS".equals(method)) {
            filterChain.doFilter(request, response);
            return;
        }
        
        final String authorizationHeader = request.getHeader("Authorization");
        
        String username = null;
        String jwt = null;
        
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            try {
                username = jwtUtil.extractUsername(jwt);
                logger.debug("Extracted username from JWT: " + username);
            } catch (Exception e) {
                logger.error("JWT token extraction failed: " + e.getMessage());
                // Continue without setting authentication - Spring Security will handle appropriately
            }
        } else {
            logger.debug("No Authorization header found or doesn't start with Bearer for: " + requestPath);
        }
        
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            try {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
                
                if (jwtUtil.validateToken(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = 
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                    logger.debug("JWT validation successful for user: " + username);
                } else {
                    logger.warn("JWT validation failed for user: " + username);
                }
            } catch (Exception e) {
                logger.error("JWT validation failed: " + e.getMessage());
                // Continue without setting authentication
            }
        }
        
        filterChain.doFilter(request, response);
    }

    private boolean isPublicEndpoint(String requestPath) {
        return publicEndpoints.stream().anyMatch(endpoint -> 
            requestPath.equals(endpoint) || requestPath.startsWith(endpoint + "/"));
    }
}
```

## backend/src/main/java/com/studentcompanion/model/Branch.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
@Table(name = "branches")
public class Branch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // e.g. Information Technology

    private String code; // e.g. "IT"

    // Getters and setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getCode() { return code; }

    public void setCode(String code) { this.code = code; }
}

```

## backend/src/main/java/com/studentcompanion/model/CareerGoal.java

```java
package com.studentcompanion.model;

public enum CareerGoal {
    GATE,
    CAT,
    UPSC,
    PLACEMENT
}

```

## backend/src/main/java/com/studentcompanion/model/CareerResource.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
@Table(name = "career_resource")
public class CareerResource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String url;

    @Enumerated(EnumType.STRING)
    private ResourceType type;

    @Enumerated(EnumType.STRING)
    private CareerGoal goal;

    // --- Getters & Setters ---

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public ResourceType getType() {
        return type;
    }

    public void setType(ResourceType type) {
        this.type = type;
    }

    public CareerGoal getGoal() {
        return goal;
    }

    public void setGoal(CareerGoal goal) {
        this.goal = goal;
    }
}

```

## backend/src/main/java/com/studentcompanion/model/Comment.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String commentText;

    private LocalDateTime timestamp;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    private String contextType; // e.g., "PYQ", "CONTRIBUTION"
    private Long contextId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getContextType() {
        return contextType;
    }

    public void setContextType(String contextType) {
        this.contextType = contextType;
    }

    public Long getContextId() {
        return contextId;
    }

    public void setContextId(Long contextId) {
        this.contextId = contextId;
    }
}

```

## backend/src/main/java/com/studentcompanion/model/Contribution.java

```java
package com.studentcompanion.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "contributions")
public class Contribution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    private String type;
    private String subject;
    private String visibility;
    private String url;

    @Column(name = "file_url")
    private String filePath;

    private int upvotes = 0;
    private int downvotes = 0;
    private int bookmarks = 0;

    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties("contributions") // ✅ Prevents circular reference
    private User user;


// Getters & Setters

public Long getId() { return id; }
public void setId(Long id) { this.id = id; }

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

public String getFilePath() { return filePath; }
public void setFilePath(String filePath) { this.filePath = filePath; }

public int getUpvotes() { return upvotes; }
public void setUpvotes(int upvotes) { this.upvotes = upvotes; }

public int getDownvotes() { return downvotes; }
public void setDownvotes(int downvotes) { this.downvotes = downvotes; }

public int getBookmarks() { return bookmarks; }
public void setBookmarks(int bookmarks) { this.bookmarks = bookmarks; }

public LocalDateTime getCreatedAt() { return createdAt; }
public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

public User getUser() { return user; }
public void setUser(User user) { this.user = user; }

}

```

## backend/src/main/java/com/studentcompanion/model/Pyq.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
public class Pyq {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "unit_id")
    private Unit unit;

    @Column(length = 1000)
    private String questionText;

    private String pdfUrl;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String getPdfUrl() {
        return pdfUrl;
    }

    public void setPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
    }
}

```

## backend/src/main/java/com/studentcompanion/model/PyqComment.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "pyq_comment")
public class PyqComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pyq_id")
    private Pyq pyq;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String commentText;

    @CreationTimestamp
    private LocalDateTime timestamp;


    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pyq getPyq() {
        return pyq;
    }

    public void setPyq(Pyq pyq) {
        this.pyq = pyq;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}

```

## backend/src/main/java/com/studentcompanion/model/QuizQuestion.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;
import java.util.List;
import com.studentcompanion.model.CareerGoal;

@Entity
public class QuizQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private CareerGoal goal;


    private String question;

    @ElementCollection
    private List<String> options;

    private String correctAnswer;
    
    public QuizQuestion(String question, List<String> options, String correctAnswer, CareerGoal goal){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.goal = goal;
    }
    public QuizQuestion() {}



    // --- Getters and Setters ---
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public CareerGoal getCareerGoal() { return goal; }
    public void setCareerGoal(CareerGoal goal) { this.goal = goal; }

    public String getQuestion() { return question; }

    public void setQuestion(String question) { this.question = question; }

    public List<String> getOptions() { return options; }

    public void setOptions(List<String> options) { this.options = options; }

    public String getCorrectAnswer() { return correctAnswer; }

    public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }
}

```

## backend/src/main/java/com/studentcompanion/model/Resource.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
@Table(name = "resources")
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "unit_id")
    private Unit unit;

    @Enumerated(EnumType.STRING)
    private ResourceType type; // VIDEO / NOTE / BOOK

    private String title;

    private String url;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public ResourceType getType() {
        return type;
    }

    public void setType(ResourceType type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}

```

## backend/src/main/java/com/studentcompanion/model/ResourceType.java

```java
package com.studentcompanion.model;

public enum ResourceType {
    VIDEO,
    NOTE,
    BOOK
}

```

## backend/src/main/java/com/studentcompanion/model/Role.java

```java
package com.studentcompanion.model;

public enum Role {
    STUDENT,
    ADMIN
}

```

## backend/src/main/java/com/studentcompanion/model/Semester.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
public class Semester {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // e.g., "1st Sem"

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

```

## backend/src/main/java/com/studentcompanion/model/StriverTopic.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
public class StriverTopic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topic;

    private String link;

    private boolean attempted = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    // --- Getters and Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTopic() { return topic; }
    public void setTopic(String topic) { this.topic = topic; }

    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }

    public boolean isAttempted() { return attempted; }
    public void setAttempted(boolean attempted) { this.attempted = attempted; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}

```

## backend/src/main/java/com/studentcompanion/model/Subject.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
@Table(name = "subjects")
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String code;

    @ManyToOne
    @JoinColumn(name = "branch_id")
    private Branch branch;

    @Column(name = "semester")
    private int semester;


    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Branch getBranch() {
        return branch;
    }   
    public void setBranch(Branch branch) {
        this.branch = branch;
    }
    public int getSemester() {
        return semester;
    }
    public void setSemester(int semester) {
        this.semester = semester;
    }
}

```

## backend/src/main/java/com/studentcompanion/model/Todo.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;
    private boolean done;
    private Long userId; // Link to the user

    // Constructors
    public Todo() {}

    public Todo(String text, boolean done, Long userId) {
        this.text = text;
        this.done = done;
        this.userId = userId;
    }

    // ✅ Getters
    public Long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public boolean isDone() {
        return done;
    }

    public Long getUserId() {
        return userId;
    }

    // ✅ Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
```

## backend/src/main/java/com/studentcompanion/model/Unit.java

```java
package com.studentcompanion.model;

import jakarta.persistence.*;

@Entity
@Table(name = "units")
public class Unit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
}

```

## backend/src/main/java/com/studentcompanion/model/User.java

```java
package com.studentcompanion.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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

```

## backend/src/main/java/com/studentcompanion/repository/CareerResourceRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.CareerGoal;
import com.studentcompanion.model.CareerResource;
import com.studentcompanion.model.ResourceType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CareerResourceRepository extends JpaRepository<CareerResource, Long> {
    List<CareerResource> findByGoalAndType(CareerGoal goal, ResourceType type);
    List<CareerResource> findByGoal(CareerGoal goal);
}

```

## backend/src/main/java/com/studentcompanion/repository/CommentRepository.java

```java
package com.studentcompanion.repository;
import com.studentcompanion.model.Comment;
import com.studentcompanion.model.User;
import org.springframework.data.jpa.repository.JpaRepository;   
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByContextTypeAndContextIdOrderByTimestampDesc(String contextType, Long contextId);
    List<Comment> findByUser(User user);
}

```

## backend/src/main/java/com/studentcompanion/repository/ContributionRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.Contribution;
import com.studentcompanion.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContributionRepository extends JpaRepository<Contribution, Long> {
List<Contribution> findByUser(User user);
}
```

## backend/src/main/java/com/studentcompanion/repository/PyqCommentRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.PyqComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PyqCommentRepository extends JpaRepository<PyqComment, Long> {
    List<PyqComment> findByPyqId(Long pyqId);
}

```

## backend/src/main/java/com/studentcompanion/repository/PyqRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.Pyq;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PyqRepository extends JpaRepository<Pyq, Long> {
    List<Pyq> findByUnitId(Long unitId);
}

```

## backend/src/main/java/com/studentcompanion/repository/QuizQuestionRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.CareerGoal;
import com.studentcompanion.model.QuizQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuizQuestionRepository extends JpaRepository<QuizQuestion, Long> {

    @Query("SELECT q FROM QuizQuestion q WHERE q.goal = :goal ORDER BY function('RANDOM')")
    List<QuizQuestion> findRandomQuestionsByGoal(@Param("goal") CareerGoal goal);
}

```

## backend/src/main/java/com/studentcompanion/repository/ResourceRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
    List<Resource> findByUnitId(Long unitId);
}

```

## backend/src/main/java/com/studentcompanion/repository/SemesterRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.Semester;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SemesterRepository extends JpaRepository<Semester, Long> {
}

```

## backend/src/main/java/com/studentcompanion/repository/StriverTopicRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.StriverTopic;
import com.studentcompanion.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StriverTopicRepository extends JpaRepository<StriverTopic, Long> {
    List<StriverTopic> findByUser(User user);
    Optional<StriverTopic> findByUserAndTopic(User user, String topic);
}

```

## backend/src/main/java/com/studentcompanion/repository/SubjectRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.Semester;
import com.studentcompanion.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    @Query("SELECT s FROM Subject s WHERE s.branch.code = :code AND s.semester = :semester")
List<Subject> getSubjectsByBranchAndSemester(@Param("code") String code, @Param("semester") int semester);


}

```

## backend/src/main/java/com/studentcompanion/repository/TodoRepository.java

```java
package com.studentcompanion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.studentcompanion.model.Todo;
import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByUserId(Long userId);
}

```

## backend/src/main/java/com/studentcompanion/repository/UnitRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.Unit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UnitRepository extends JpaRepository<Unit, Long> {
    List<Unit> findBySubjectId(Long subjectId);
}

```

## backend/src/main/java/com/studentcompanion/repository/UserRepository.java

```java
package com.studentcompanion.repository;

import com.studentcompanion.model.User; // Make sure this matches folder structure
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
```

## backend/src/main/java/com/studentcompanion/service/CustomUserDetailsService.java

```java
package com.studentcompanion.service;

import com.studentcompanion.model.User;
import com.studentcompanion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.util.Collections;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        
        return new org.springframework.security.core.userdetails.User(
        user.getEmail(),
        user.getPassword(),
        Collections.singleton(new SimpleGrantedAuthority(user.getRole().name()))
);

    }
}
```

## backend/src/main/java/com/studentcompanion/service/StudyResourceService.java

```java
package com.studentcompanion.service;

import com.studentcompanion.model.*;
import com.studentcompanion.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class StudyResourceService {

    @Autowired
    private SemesterRepository semesterRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private UnitRepository unitRepository;

    @Autowired
    private ResourceRepository resourceRepository;

    @Autowired
    private PyqRepository pyqRepository;


    // ====================== STUDENT: Fetch Methods ======================

    public List<Semester> getAllSemesters() {
        return semesterRepository.findAll();
    }

    public List<Subject> getSubjectsBySemesterAndBranch(int semester, String branchCode) {
        System.out.println("📩 Using JPQL fetch for " + semester + ", " + branchCode);
        return subjectRepository.getSubjectsByBranchAndSemester(branchCode, semester);
    }

    public List<Unit> getUnitsBySubject(Long subjectId) {
        return unitRepository.findBySubjectId(subjectId);
    }

    public List<Resource> getResourcesByUnit(Long unitId) {
        return resourceRepository.findByUnitId(unitId);
    }

    public List<Pyq> getPyqsByUnit(Long unitId) {
        return pyqRepository.findByUnitId(unitId);
    }


    // ✅ Fixed: Comment Saving Logic for Pyq
    

    // ====================== ADMIN: Create Methods ======================

    public Semester createSemester(Semester semester) {
        return semesterRepository.save(semester);
    }

    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    public Unit createUnit(Unit unit) {
        return unitRepository.save(unit);
    }

    public Resource createResource(Resource resource) {
        return resourceRepository.save(resource);
    }
}

```

## backend/src/main/java/com/studentcompanion/StudentCompanionApplication.java

```java
package com.studentcompanion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaAuditing
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.studentcompanion.repository")
public class StudentCompanionApplication {
    public static void main(String[] args) {
        System.out.println("Loading Spring Boot app...");
        SpringApplication.run(StudentCompanionApplication.class, args);
    }
}
```

## backend/src/main/java/com/studentcompanion/util/JwtUtil.java

```java
package com.studentcompanion.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    @Value("${jwt.secret:REDACTED}")
    private String secret;

    @Value("${jwt.expiration:86400}")
    private Long expiration;

    private SecretKey getSigningKey() {
        byte[] keyBytes = secret.getBytes();
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiration * 1000))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
```

## database/schema.sql

```sql
-- Student Companion Platform Database Schema
-- This schema integrates with your existing User table and supports all platform features

-- =====================================================
-- CORE USER & PROFILE TABLES
-- =====================================================

-- Your existing users table (already created)
-- users (id, name, email, password)

-- Extended user profile information
CREATE TABLE user_profiles (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    college_name VARCHAR(255),
    branch VARCHAR(100),
    current_semester INTEGER CHECK (current_semester >= 1 AND current_semester <= 8),
    graduation_year INTEGER,
    phone_number VARCHAR(15),
    bio TEXT,
    profile_picture_url VARCHAR(500),
    date_of_birth DATE,
    location VARCHAR(100),
    linkedin_url VARCHAR(300),
    github_url VARCHAR(300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id)
);

-- =====================================================
-- ACADEMIC STRUCTURE TABLES
-- =====================================================

-- Branches/Streams (CSE, ECE, ME, etc.)
CREATE TABLE branches (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(10) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subjects for each semester and branch
CREATE TABLE subjects (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    code VARCHAR(20) NOT NULL,
    branch_id BIGINT NOT NULL REFERENCES branches(id),
    semester INTEGER NOT NULL CHECK (semester >= 1 AND semester <= 8),
    credits INTEGER DEFAULT 3,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(code, branch_id, semester)
);

-- =====================================================
-- RESOURCE MANAGEMENT TABLES
-- =====================================================

-- Resource types (Video, Notes, PYQ, Books, etc.)
CREATE TABLE resource_types (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    icon VARCHAR(100) -- For frontend icons
);

-- Resources for subjects
CREATE TABLE subject_resources (
    id BIGSERIAL PRIMARY KEY,
    subject_id BIGINT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    resource_type_id BIGINT NOT NULL REFERENCES resource_types(id),
    title VARCHAR(300) NOT NULL,
    description TEXT,
    url VARCHAR(1000),
    file_path VARCHAR(500), -- For uploaded files
    is_external BOOLEAN DEFAULT true, -- true for YouTube links, false for uploaded files
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('Beginner', 'Intermediate', 'Advanced')),
    tags TEXT[], -- PostgreSQL array for tags
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    contributed_by BIGINT REFERENCES users(id),
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- CAREER & PLACEMENT TABLES
-- =====================================================

-- Career paths (Placement, GATE, GRE, CAT, etc.)
CREATE TABLE career_paths (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    category VARCHAR(50) NOT NULL, -- 'placement', 'competitive_exam', 'higher_studies'
    icon VARCHAR(100),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Companies for placement preparation
CREATE TABLE companies (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL UNIQUE,
    description TEXT,
    website_url VARCHAR(300),
    logo_url VARCHAR(300),
    industry VARCHAR(100),
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('Easy', 'Medium', 'Hard')),
    package_range VARCHAR(100), -- e.g., "10-15 LPA"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Question categories (DSA, Aptitude, Technical, HR, etc.)
CREATE TABLE question_categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    parent_category_id BIGINT REFERENCES question_categories(id),
    description TEXT,
    career_path_id BIGINT REFERENCES career_paths(id)
);

-- Questions for OA, interviews, competitive exams
CREATE TABLE questions (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    question_type VARCHAR(50) NOT NULL, -- 'coding', 'mcq', 'subjective', 'aptitude'
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('Easy', 'Medium', 'Hard')),
    category_id BIGINT NOT NULL REFERENCES question_categories(id),
    company_id BIGINT REFERENCES companies(id), -- NULL for general questions
    career_path_id BIGINT REFERENCES career_paths(id),
    tags TEXT[],
    solution TEXT,
    hints TEXT[],
    time_limit INTEGER, -- in minutes
    memory_limit INTEGER, -- in MB
    sample_input TEXT,
    sample_output TEXT,
    explanation TEXT,
    contributed_by BIGINT REFERENCES users(id),
    is_verified BOOLEAN DEFAULT false,
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Coding sheets (like Striver's A2Z DSA Sheet)
CREATE TABLE coding_sheets (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    created_by BIGINT REFERENCES users(id),
    is_public BOOLEAN DEFAULT true,
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('Beginner', 'Intermediate', 'Advanced')),
    estimated_days INTEGER,
    total_questions INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Questions in coding sheets
CREATE TABLE sheet_questions (
    id BIGSERIAL PRIMARY KEY,
    sheet_id BIGINT NOT NULL REFERENCES coding_sheets(id) ON DELETE CASCADE,
    question_id BIGINT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    is_mandatory BOOLEAN DEFAULT true,
    topic VARCHAR(100),
    UNIQUE(sheet_id, question_id),
    UNIQUE(sheet_id, order_index)
);

-- =====================================================
-- QUIZ & TEST SYSTEM
-- =====================================================

-- Quizzes for subjects and career preparation
CREATE TABLE quizzes (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    description TEXT,
    subject_id BIGINT REFERENCES subjects(id), -- NULL for career-based quizzes
    career_path_id BIGINT REFERENCES career_paths(id), -- NULL for subject-based quizzes
    quiz_type VARCHAR(50) NOT NULL, -- 'practice', 'mock_test', 'previous_year'
    time_limit INTEGER, -- in minutes
    total_questions INTEGER NOT NULL,
    passing_score INTEGER,
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('Easy', 'Medium', 'Hard')),
    is_public BOOLEAN DEFAULT true,
    created_by BIGINT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Questions in quizzes
CREATE TABLE quiz_questions (
    id BIGSERIAL PRIMARY KEY,
    quiz_id BIGINT NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    question_id BIGINT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    order_index INTEGER NOT NULL,
    marks INTEGER DEFAULT 1,
    negative_marks DECIMAL(3,2) DEFAULT 0,
    UNIQUE(quiz_id, question_id),
    UNIQUE(quiz_id, order_index)
);

-- =====================================================
-- PROGRESS TRACKING TABLES
-- =====================================================

-- User progress on subjects
CREATE TABLE subject_progress (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subject_id BIGINT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    completion_percentage DECIMAL(5,2) DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
    time_spent INTEGER DEFAULT 0, -- in minutes
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    current_streak INTEGER DEFAULT 0,
    max_streak INTEGER DEFAULT 0,
    resources_completed INTEGER DEFAULT 0,
    total_resources INTEGER DEFAULT 0,
    UNIQUE(user_id, subject_id)
);

-- User progress on career paths
CREATE TABLE career_progress (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    career_path_id BIGINT NOT NULL REFERENCES career_paths(id) ON DELETE CASCADE,
    completion_percentage DECIMAL(5,2) DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
    time_spent INTEGER DEFAULT 0, -- in minutes
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    current_streak INTEGER DEFAULT 0,
    max_streak INTEGER DEFAULT 0,
    questions_solved INTEGER DEFAULT 0,
    questions_attempted INTEGER DEFAULT 0,
    UNIQUE(user_id, career_path_id)
);

-- User progress on coding sheets
CREATE TABLE sheet_progress (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    sheet_id BIGINT NOT NULL REFERENCES coding_sheets(id) ON DELETE CASCADE,
    completion_percentage DECIMAL(5,2) DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
    questions_solved INTEGER DEFAULT 0,
    current_streak INTEGER DEFAULT 0,
    max_streak INTEGER DEFAULT 0,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, sheet_id)
);

-- Track individual question attempts
CREATE TABLE user_question_attempts (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question_id BIGINT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    is_solved BOOLEAN DEFAULT false,
    attempts_count INTEGER DEFAULT 1,
    time_taken INTEGER, -- in minutes
    solution_code TEXT,
    language VARCHAR(50),
    first_attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    solved_at TIMESTAMP,
    UNIQUE(user_id, question_id)
);

-- Track quiz attempts
CREATE TABLE quiz_attempts (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    quiz_id BIGINT NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    score INTEGER NOT NULL,
    total_marks INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    time_taken INTEGER, -- in minutes
    is_completed BOOLEAN DEFAULT true,
    attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- GAMIFICATION & ACHIEVEMENTS
-- =====================================================

-- Achievement types and badges
CREATE TABLE achievements (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    badge_icon VARCHAR(100),
    badge_color VARCHAR(20),
    achievement_type VARCHAR(50) NOT NULL, -- 'streak', 'completion', 'score', 'contribution'
    criteria_value INTEGER, -- e.g., 30 for "30-day streak"
    rarity VARCHAR(20) CHECK (rarity IN ('Common', 'Rare', 'Epic', 'Legendary')),
    points INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User achievements
CREATE TABLE user_achievements (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    achievement_id BIGINT NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_displayed BOOLEAN DEFAULT true, -- User can choose to display or not
    UNIQUE(user_id, achievement_id)
);

-- Daily streak tracking
CREATE TABLE user_streaks (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    streak_type VARCHAR(50) NOT NULL, -- 'overall', 'subject', 'career'
    reference_id BIGINT, -- subject_id or career_path_id
    current_streak INTEGER DEFAULT 0,
    max_streak INTEGER DEFAULT 0,
    last_activity_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, streak_type, reference_id)
);

-- =====================================================
-- DISCUSSION & CONTRIBUTION SYSTEM
-- =====================================================

-- Discussion categories
CREATE TABLE discussion_categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon VARCHAR(100),
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true
);

-- Discussion posts
CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    author_id BIGINT NOT NULL REFERENCES users(id),
    category_id BIGINT REFERENCES discussion_categories(id),
    subject_id BIGINT REFERENCES subjects(id), -- If related to specific subject
    career_path_id BIGINT REFERENCES career_paths(id), -- If related to career path
    post_type VARCHAR(50) DEFAULT 'discussion', -- 'discussion', 'experience', 'resource_share', 'question'
    tags TEXT[],
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    reply_count INTEGER DEFAULT 0,
    is_pinned BOOLEAN DEFAULT false,
    is_solved BOOLEAN DEFAULT false, -- For question type posts
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Post replies/comments
CREATE TABLE post_replies (
    id BIGSERIAL PRIMARY KEY,
    post_id BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    parent_reply_id BIGINT REFERENCES post_replies(id), -- For nested replies
    author_id BIGINT NOT NULL REFERENCES users(id),
    content TEXT NOT NULL,
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    is_accepted_answer BOOLEAN DEFAULT false, -- For question posts
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vote tracking for posts and replies
CREATE TABLE votes (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    post_id BIGINT REFERENCES posts(id) ON DELETE CASCADE,
    reply_id BIGINT REFERENCES post_replies(id) ON DELETE CASCADE,
    vote_type VARCHAR(10) NOT NULL CHECK (vote_type IN ('upvote', 'downvote')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT vote_target_check CHECK (
        (post_id IS NOT NULL AND reply_id IS NULL) OR 
        (post_id IS NULL AND reply_id IS NOT NULL)
    ),
    UNIQUE(user_id, post_id),
    UNIQUE(user_id, reply_id)
);

-- =====================================================
-- NOTIFICATION SYSTEM
-- =====================================================

-- User notifications
CREATE TABLE notifications (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    notification_type VARCHAR(50) NOT NULL, -- 'achievement', 'reply', 'streak', 'reminder'
    reference_id BIGINT, -- ID of related entity (post, achievement, etc.)
    reference_type VARCHAR(50), -- 'post', 'achievement', 'streak', etc.
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- User-related indexes
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_user_profiles_semester ON user_profiles(current_semester);

-- Subject and resource indexes
CREATE INDEX idx_subjects_branch_semester ON subjects(branch_id, semester);
CREATE INDEX idx_subject_resources_subject ON subject_resources(subject_id);
CREATE INDEX idx_subject_resources_type ON subject_resources(resource_type_id);

-- Question and quiz indexes
CREATE INDEX idx_questions_category ON questions(category_id);
CREATE INDEX idx_questions_company ON questions(company_id);
CREATE INDEX idx_questions_difficulty ON questions(difficulty_level);
CREATE INDEX idx_quiz_questions_quiz ON quiz_questions(quiz_id);

-- Progress tracking indexes
CREATE INDEX idx_subject_progress_user ON subject_progress(user_id);
CREATE INDEX idx_career_progress_user ON career_progress(user_id);
CREATE INDEX idx_sheet_progress_user ON sheet_progress(user_id);
CREATE INDEX idx_question_attempts_user ON user_question_attempts(user_id);

-- Discussion indexes
CREATE INDEX idx_posts_author ON posts(author_id);
CREATE INDEX idx_posts_category ON posts(category_id);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX idx_post_replies_post ON post_replies(post_id);
CREATE INDEX idx_votes_user ON votes(user_id);

-- Notification indexes
CREATE INDEX idx_notifications_user_unread ON notifications(user_id, is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);

-- =====================================================
-- SAMPLE DATA INSERTION
-- =====================================================

-- Insert sample branches
INSERT INTO branches (name, code, description) VALUES
('Computer Science Engineering', 'CSE', 'Computer Science and Engineering'),
('Electronics and Communication', 'ECE', 'Electronics and Communication Engineering'),
('Mechanical Engineering', 'ME', 'Mechanical Engineering'),
('Civil Engineering', 'CE', 'Civil Engineering'),
('Information Technology', 'IT', 'Information Technology');

-- Insert resource types
INSERT INTO resource_types (name, description, icon) VALUES
('Video', 'YouTube videos and online lectures', 'video-icon'),
('Notes', 'Study notes and PDFs', 'notes-icon'),
('PYQ', 'Previous Year Question Papers', 'question-icon'),
('Books', 'Reference books and textbooks', 'book-icon'),
('Practice', 'Practice problems and exercises', 'practice-icon');

-- Insert career paths
INSERT INTO career_paths (name, description, category) VALUES
('Software Engineering Placement', 'Preparation for software engineering roles', 'placement'),
('GATE', 'Graduate Aptitude Test in Engineering', 'competitive_exam'),
('GRE', 'Graduate Record Examination', 'higher_studies'),
('CAT', 'Common Admission Test for MBA', 'competitive_exam'),
('Data Science Placement', 'Preparation for data science roles', 'placement');

-- Insert discussion categories
INSERT INTO discussion_categories (name, description, icon, order_index) VALUES
('General Discussion', 'General academic discussions', 'chat-icon', 1),
('Placement Experiences', 'Share your placement experiences', 'briefcase-icon', 2),
('Study Materials', 'Share and request study materials', 'book-icon', 3),
('Career Guidance', 'Career advice and guidance', 'compass-icon', 4),
('Technical Help', 'Get help with technical problems', 'code-icon', 5);

-- Insert sample achievements
INSERT INTO achievements (name, description, achievement_type, criteria_value, rarity, points) VALUES
('First Steps', 'Complete your first lesson', 'completion', 1, 'Common', 10),
('Week Warrior', 'Maintain a 7-day streak', 'streak', 7, 'Common', 50),
('Month Master', 'Maintain a 30-day streak', 'streak', 30, 'Rare', 200),
('Problem Solver', 'Solve 100 coding problems', 'completion', 100, 'Epic', 500),
('Helper', 'Get 50 upvotes on your contributions', 'contribution', 50, 'Rare', 300);
```

## frontend/package.json

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:8080",
  "dependencies": {
    "@fullcalendar/bootstrap5": "^6.1.17",
    "@fullcalendar/core": "^6.1.17",
    "@fullcalendar/daygrid": "^6.1.17",
    "@fullcalendar/interaction": "^6.1.17",
    "@fullcalendar/react": "^6.1.17",
    "@fullcalendar/timegrid": "^6.1.17",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.9.0",
    "framer-motion": "^12.18.1",
    "lucide-react": "^0.515.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.6.2",
    "react-scripts": "5.0.1",
    "react-toastify": "^11.0.5",
    "web-vitals": "^2.1.4",
    "zustand": "^5.0.7"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.10",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.5",
    "tailwindcss": "^3.4.17"
  }
}

```

## frontend/src/App.css

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

## frontend/src/App.js

```js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';
import SubjectsPage from './components/SubjectsPage';
import ProtectedRoute from './components/ProtectedRoute';
import CareerGoalPage from './pages/CareerGoalPage';
import { ThemeProvider } from "./context/ThemeContext";
import './utils/axiosConfig';
import ContributePage from './pages/ContributePage';
import UnitPage from './components/UnitPage';
import Contact from './components/Contact';
import About from './components/About';
import Features from './components/Features';

import './utils/axiosConfig'; // ensure Axios config loads

import QuizPage from './components/QuizPage'; // ✅ ADD THIS LINE
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <ThemeProvider>
 
      <Router>
             
  <ToastContainer />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/quizzes" element={<QuizPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/goal/:goal" element={
            <ProtectedRoute>
              <CareerGoalPage />
            </ProtectedRoute>
          } />

          <Route path="/subjects/:subjectId/units" element={<UnitPage />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/subjects/:semesterId" element={<SubjectsPage />} />

          <Route path="/contribute" element={<ContributePage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

```

## frontend/src/App.test.js

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

## frontend/src/components/About.js

```js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <Header />

      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-700 mb-4">About Us</h1>
            <p className="text-xl text-gray-600">Built by students, for students of SGSITS</p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              StudiFy was created to bridge the gap between academic excellence and career success.
              We understand the challenges of juggling semester studies with competitive exams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-indigo-700">Why StudiFy?</h3>
                {[
                  'Designed specifically for SGSITS curriculum',
                  'Curated by successful students and alumni',
                  'Progress tracking to keep you motivated',
                  'Community-driven platform with peer support',
                ].map((item, idx) => (
                  <div className="flex items-start gap-3" key={idx}>
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-700 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To become the go-to platform for every SGSITS student, helping them excel in academics
                  while building a strong foundation for their future careers.
                </p>
              </div>
            </div>
          </div>

          {/* Creators Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Meet the Creators</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ojasv */}
              <div className="text-center">
                <img
                  src="/ojasv.jpg"
                  alt="Ojasv Agrawal"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-300"
                />
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">Ojasv Agrawal</h3>
                <p className="text-gray-600 mb-2">Co-Founder & Developer</p>
                <p className="text-sm text-gray-500 mb-4">
                  IT student at SGSITS, passionate about DSA and web development. Focused on creating tools to
                  improve student life.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/ojasvagrawal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/ojasvagr123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>

              {/* Nidhi */}
              <div className="text-center">
                <img
                  src="/nidhi.jpg"
                  alt="Nidhi Agrawal"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-green-300"
                />
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">Nidhi Agrawal</h3>
                <p className="text-gray-600 mb-2">Co-Founder & Developer</p>
                <p className="text-sm text-gray-500 mb-4">
                  ECE student at SGSITS with a love for backend development and clean data. Dedicated to building tools that empower students.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/nidhi-agrawal-a91803280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/nidhi500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">Our Journey</h3>
              <p className="text-gray-600">
                As SGSITS students, we’ve lived the same problems we aim to solve with StudiFy—
                balancing semester workload and future goals. This is our small step toward easing that journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;

```

## frontend/src/components/AssignmentCalendar.js

```js
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useAuthStore } from '../stores/authStore';

export default function AssignmentCalendar() {
  const user = useAuthStore((state) => state.user);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!user?.branch) return;

    fetch(`http://localhost:8080/api/calendar/assignments?branch=${user.branch}`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          const fallbackEvents = [
            {
              title: '📘 Assignment 1: DSP',
              date: '2025-06-27',
              color: '#6366f1',
            },
            {
              title: '📘 Assignment 2: VLSI',
              date: '2025-06-30',
              color: '#4f46e5',
            },
            {
              title: '📙 Mid-Sem 1: EDC',
              date: '2025-07-05',
              color: '#f59e0b',
            },
            {
              title: '📕 Mid-Sem 2: Signals',
              date: '2025-07-15',
              color: '#ef4444',
            },
            {
              title: '📗 Quiz: Analog Circuits',
              date: '2025-07-22',
              color: '#10b981',
            },
            {
              title: '📙 End-Sem Exam: All Subjects',
              date: '2025-07-30',
              color: '#dc2626',
            }
          ];
          setEvents(fallbackEvents);
        } else {
          setEvents(data);
        }
      })
      .catch(err => console.error("❌ Failed to load assignment events:", err));
  }, [user]);

  return (
    <section className="w-full">
      <div className="rounded-t-2xl px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h3 className="text-2xl font-bold">📅 Assignment & Exam Timetable</h3>
        <p className="text-sm text-indigo-100">Deadlines and important dates</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-b-2xl shadow-xl">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height={500}
        />
      </div>
    </section>
  );
}

```

## frontend/src/components/auth.js

```js
import axios from "axios";
import { useAuthStore } from "../stores/authStore";

const BASE_URL = "http://localhost:8080/api/auth"; // adjust if needed

export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });

  const user = response.data;
  useAuthStore.getState().setUser(user);
};

export const register = async (name, email, password) => {
  const response = await axios.post(`${BASE_URL}/register`, {
    name,
    email,
    password,
  });

  const user = response.data;
  useAuthStore.getState().setUser(user);
};

```

## frontend/src/components/calendarStyles.css

```css
.event-math {
  background-color: #f59e0b !important; /* amber */
  color: white !important;
  border: none;
}
.event-physics {
  background-color: #3b82f6 !important; /* blue */
  color: white !important;
  border: none;
}
.event-dsa {
  background-color: #10b981 !important; /* emerald */
  color: white !important;
  border: none;
}
.event-de {
  background-color: #8b5cf6 !important; /* violet */
  color: white !important;
  border: none;
}
.event-english {
  background-color: #ec4899 !important; /* pink */
  color: white !important;
  border: none;
}
.event-micro {
  background-color: #ef4444 !important; /* red */
  color: white !important;
  border: none;
}

```

## frontend/src/components/CareerQuiz.jsx

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CareerQuiz({ goal }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/quiz/${goal.toUpperCase()}`)
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Failed to load quiz. Try again.");
        setLoading(false);
      });
  }, [goal]);

  const handleOptionChange = (questionId, selected) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selected }));
  };

  const handleSubmit = async () => {
    const submission = questions.map((q) => ({
      questionId: q.id,
      selectedAnswer: answers[q.id] || "",
    }));

    try {
      const res = await axios.post("http://localhost:8080/api/quiz/submit", submission);
      setScore(res.data);
      setSubmitted(true);
    } catch (e) {
      console.error("❌ Failed to submit quiz");
    }
  };

  if (loading) return <div className="text-center py-20 text-xl text-indigo-600 animate-pulse">Loading quiz...</div>;
  if (error) return <div className="text-center text-red-600 py-20 text-lg">{error}</div>;
  if (!questions.length) return <div className="text-center py-20 text-gray-600">No questions available.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 mb-10 text-center">{goal} Quiz</h1>

        <ol className="space-y-8">
          {questions.map((q, index) => (
            <li key={q.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <p className="font-semibold text-lg mb-4">{index + 1}. {q.question}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, i) => {
                  const selected = answers[q.id];
                  const isCorrect = submitted && opt === q.correctAnswer;
                  const isWrong = submitted && selected === opt && selected !== q.correctAnswer;

                  return (
                    <li key={i}>
                      <label
                        className={`flex items-center p-2 rounded-lg border transition cursor-pointer
                          ${isCorrect ? 'bg-green-100 border-green-400' : ''}
                          ${isWrong ? 'bg-red-100 border-red-400' : ''}
                          ${!isCorrect && !isWrong ? 'hover:bg-indigo-50' : ''}
                        `}
                      >
                        <input
                          type="radio"
                          name={`q${q.id}`}
                          value={opt}
                          checked={selected === opt}
                          disabled={submitted}
                          onChange={() => handleOptionChange(q.id, opt)}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{opt}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>

        {!submitted ? (
          <div className="text-center mt-10">
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              ✅ Submit Quiz
            </button>
          </div>
        ) : (
          <div className="text-center mt-10 text-xl font-semibold text-indigo-700">
            🎉 You got {score.correct} correct and {score.wrong} wrong!
          </div>
        )}
      </div>
    </div>
  );
}

```

## frontend/src/components/CareerResourceCard.jsx

```jsx
import React from "react";

export default function CareerResourceCard({ title, items }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">{title}</h2>

      {items.length === 0 ? (
        <p className="text-gray-500 italic">No resources available in this category.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((res) => (
            <li
              key={res.id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition"
            >
              <h3 className="font-semibold text-indigo-700 text-md mb-2 line-clamp-2">{res.title}</h3>

              {/* Handle video previews */}
              {res.type === "VIDEO" && isYouTubeLink(res.url) ? (
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded mb-2">
                  <iframe
                    src={getEmbedUrl(res.url)}
                    className="absolute top-0 left-0 w-full h-full"
                    title={res.title}
                    allowFullScreen
                    frameBorder="0"
                  />
                </div>
              ) : null}

              <a
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                🔗 View Resource
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Utility functions for YouTube
function isYouTubeLink(url) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function getEmbedUrl(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

```

## frontend/src/components/CommentSection.jsx

```jsx
// src/components/CommentSection.jsx
import React, { useEffect, useState } from "react";
import apiClient from "../utils/axiosConfig";
import { useAuthStore } from "../stores/authStore";

export default function CommentSection({ contextType, contextId }) {
  // ✅ Zustand reactive access
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // ✅ Fetch comments on mount or when context changes
  useEffect(() => {
    if (!contextType || !contextId) return;

    apiClient
      .get(`/api/comments/${contextType}/${contextId}`)
      .then((res) => setComments(res.data))
      .catch((err) => {
        console.error("❌ Error loading comments:", err);
      });
  }, [contextType, contextId]);

  // ✅ Log current Zustand values (for debug only)
  useEffect(() => {
    console.log("🧪 Zustand User:", user);
    console.log("🧪 Zustand Token:", token);
  }, [user, token]);

  // ✅ Handle comment submission
  const handleSubmit = async () => {
    if (!token || !user) {
      alert("Please log in to comment.");
      return;
    }

    if (!newComment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    try {
      const res = await apiClient.post(
        `/api/comments/${contextType}/${contextId}`,
        { commentText: newComment }
      );

      setComments((prev) => [res.data, ...prev]);
      setNewComment("");
    } catch (err) {
      console.error("❌ Failed to post comment:", err.response?.data || err.message);
      alert("❌ " + (err.response?.data || "Failed to post comment."));
    }
  };

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Comments</h4>
      {comments.length === 0 && (
        <p className="text-gray-500">No comments yet.</p>
      )}
      {comments.map((c) => (
        <div key={c.id} className="text-sm text-gray-700 mb-2">
          <span className="font-medium">{c.user?.name || "User"}</span>:{" "}
          {c.commentText}
          <div className="text-xs text-gray-400">
            {new Date(c.timestamp).toLocaleString()}
          </div>
        </div>
      ))}

      {user ? (
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-grow border px-2 py-1 rounded"
          />
          <button
            onClick={handleSubmit}
            disabled={!newComment.trim()}
            className="bg-indigo-600 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Post
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-500 mt-2">Login to post a comment.</p>
      )}
    </div>
  );
}

```

## frontend/src/components/Contact.js

```js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <Header />
      
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-700 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with us at SGSITS campus
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">ojasvagrawal2807@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      Shri Govindram Seksaria Institute of Technology and Science<br />
                      23, Sir M. Visvesvaraya Marg, Indore<br />
                      Madhya Pradesh 452003
                    </p>
                  </div>
                </div>
                
            
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 pb-0">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Find Us on Campus</h2>
                                <p className="text-gray-600 mb-6">
                  Visit our institute campus to connect in person.
                </p>
              </div>
              <iframe
                title="SGSITS Indore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2562160393904!2d75.87157267476157!3d22.726274627321434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd8b5b5cee79%3A0x1ce0eb2d007563ff!2sGolden%20Gate%20SGSITS!5e1!3m2!1sen!2sin!4v1750853741448!5m2!1sen!2sin" 
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;

```

## frontend/src/components/DashboardPage.js

```js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import LogoutButton from "./LogoutButton";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user) || {};
  const goal = user.goal || "Not Set";
  const logout = useAuthStore((state) => state.logout);

  const goalDescMap = {
    GATE: "Access GATE books, notes, and videos to build strong core concepts.",
    CAT: "Practice CAT-oriented aptitude, notes, and videos.",
    UPSC: "Explore curated UPSC notes, books, and concept videos.",
    PLACEMENT: "Striver Sheet, company notes, interview experiences, and videos to ace placement."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-indigo-700">StudiFy</h1>
        </div>
        <div className="flex items-center gap-4 text-gray-700 font-medium">
          <span>
            Welcome, <span className="text-indigo-700 font-semibold">{user.name || "Student"}</span>
          </span>
          <LogoutButton />
        </div>
      </nav>

      {/* Compact Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center py-8 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            Your {user.branch ? user.branch.toUpperCase() : "ECE"} Learning Hub
          </h2>
          <p className="text-lg opacity-90">Smart planning, curated content, and goal-focused tools — all in one place!</p>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Study Resources */}
            <DashboardCard
              icon={
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
              }
              title="📚 Study Resources"
              desc="Semester-wise notes, videos, and PDFs for all subjects"
              features={["Video Lectures", "Notes & PDFs", "PYQ Papers", "Reference Books"]}
              link={`/subjects/${user.currentSemester}?branch=${user.branch}`}
              accent="border-indigo-400"
            />

            {/* Career Goal Dashboard */}
            <DashboardCard
              icon={
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              }
              title={`🎯 ${goal !== "Not Set" ? goal : "Career Goal"}`}
              desc={goalDescMap[goal] || "Set a career goal to begin your preparation!"}
              features={
                goal === "GATE" ? ["GATE PYQs", "Mock Tests", "Analytics", "Practice"] :
                goal === "CAT" ? ["Quant Practice", "Verbal Ability", "Mock CATs", "Analysis"] :
                goal === "UPSC" ? ["Prelims Material", "Current Affairs", "Mock Tests", "Writing"] :
                goal === "PLACEMENT" ? ["Coding Practice", "Aptitude Tests", "Interview Prep", "Companies"] :
                ["Set Goal", "Custom Path", "Track Progress", "Achieve Success"]
              }
              link={`/goal/${goal.toLowerCase()}`}
              accent="border-green-400"
            />

            {/* Quizzes */}
            <DashboardCard
              icon={
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                  </svg>
                </div>
              }
              title={`📝 ${goal !== "Not Set" ? goal : "Practice"} Quizzes`}
              desc={
                goal === "GATE" ? "Practice GATE PYQs for your branch" :
                goal === "CAT" ? "Take CAT-level aptitude quizzes" :
                goal === "UPSC" ? "Attempt UPSC PYQs for Prelims" :
                goal === "PLACEMENT" ? "Logical reasoning & coding quizzes" :
                "Interactive quizzes for practice"
              }
              features={["Interactive Tests", "Real-time Results", "Progress Track", "Analysis"]}
              link="/quizzes"
              accent="border-orange-400"
            />

            {/* Profile */}
            <DashboardCard
              icon={
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              }
              title="👤 Profile & Analytics"
              desc="View your progress, achievements, and account settings"
              features={["Personal Profile", "Achievements", "Study Analytics", "Settings"]}
              link="/profile"
              accent="border-pink-400"
            />

          </div>

        </div>
      </main>
    </div>
  );
}


function DashboardCard({ icon, title, desc, features, link, accent }) {
  return (
    <Link to={link} className={`bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${accent} hover:border-opacity-80 block transform hover:-translate-y-1 h-full flex flex-col justify-between`}>
      <div>
        <div className="mb-3">{icon}</div>
        <h3 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{desc}</p>
        <div className="grid grid-cols-2 gap-1">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-gray-700">
              <span className="text-green-500 mr-1 text-xs">✓</span>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <span className="text-blue-600 hover:underline text-sm font-medium flex items-center justify-between">
          <span>Explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}


```

## frontend/src/components/EditProfileModal.js

```js
import React, { useState } from 'react';

export default function EditProfileModal({ user, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    name: user.name,
    dob: user.dob,
    gender: user.gender,
    goal: user.goal,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const updated = await res.json();
        onUpdate(updated);
        onClose();
      }
    } catch (err) {
      console.error('Failed to update profile', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-indigo-700">📝 Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Name" required />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border p-2 rounded" required />
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border p-2 rounded" required>
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
          <input name="goal" value={formData.goal} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Goal" required />
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

```

## frontend/src/components/Features.js

```js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <Header />
      
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-700 mb-4">Platform Features</h1>
            <p className="text-xl text-gray-600">
              Everything designed specifically for SGSITS students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Semester Studies */}
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
              }
              title="Semester Studies"
              description="Complete academic support for your current semester with curated resources from successful students."
              details={[
                "Subject-wise organized notes and materials",
                "Video lectures from top educators",
                "Previous year question papers with solutions",
                "Reference books and study guides",
                "Topic-wise breakdown of syllabus"
              ]}
            />

            {/* Career Preparation */}
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              }
              title="Career Preparation"
              description="Comprehensive preparation materials for GATE, CAT, UPSC, and campus placements."
              details={[
                "GATE/CAT/UPSC previous year questions",
                "Placement preparation with coding sheets",
                "Interview experiences from alumni",
                "Company-wise preparation guides",
                "Mock tests and practice sessions"
              ]}
            />

            {/* Progress Tracking */}
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                </div>
              }
              title="Progress Analytics"
              description="Detailed tracking of your learning journey with insights and motivation tools."
              details={[
                "Daily and weekly learning streaks",
                "Subject-wise progress reports",
                "Achievement badges and milestones",
                "Performance comparison and insights",
                "Goal setting and tracking tools"
              ]}
            />

            {/* Community */}
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
              }
              title="Student Community"
              description="Connect and collaborate with fellow SGSITS students for better learning outcomes."
              details={[
                "Share study experiences and tips",
                "Help others with doubt resolution",
                "Contribute and access shared resources",
                "Discussion forums for each subject",
                "Peer-to-peer learning groups"
              ]}
            />

            {/* Interactive Learning */}
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                  </svg>
                </div>
              }
              title="Interactive Quizzes"
              description="Practice and test your knowledge with comprehensive quiz system."
              details={[
                "Subject-wise chapter quizzes",
                "Competitive exam mock tests",
                "Coding practice challenges",
                "Real-time results and explanations",
                "Difficulty-based question sorting"
              ]}
            />

            {/* Personal Dashboard */}
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              }
              title="Personal Dashboard"
              description="Your personalized hub for managing all aspects of your academic journey."
              details={[
                "Customizable profile with academic info",
                "Achievement gallery and certificates",
                "Study analytics and time tracking",
                "Goal management and reminders",
                "Resource bookmarking and organization"
              ]}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description, details }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-indigo-400">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-indigo-700 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
```

## frontend/src/components/Footer.js

```js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-indigo-700">StudiFy</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Your complete academic companion for SGSITS students. From semester studies to career preparation - we've got you covered.
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <span>Made with</span>
              <span className="text-red-500 text-lg">❤️</span>
              <span>for SGSITS Students</span>
            </div>
          </div>

          {/* Quick Links */}
        <div>
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">Quick Links</h3>
        <ul className="space-y-2">
            <li>
            <button
                onClick={() => navigate('/features')}
                className="text-gray-600 hover:text-indigo-600 transition"
            >
                Features
            </button>
            </li>
            <li>
            <button
                onClick={() => navigate('/about')}
                className="text-gray-600 hover:text-indigo-600 transition"
            >
                About Us
            </button>
            </li>
            <li>
            <button
                onClick={() => navigate('/contact')}
                className="text-gray-600 hover:text-indigo-600 transition"
            >
                Contact Us
            </button>
            </li>
            <li>
            <button
                onClick={scrollToTop}
                className="text-gray-600 hover:text-indigo-600 transition"
            >
                Back to Top
            </button>
            </li>
        </ul>
        </div>


          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/login')}
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/signup')}
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Sign Up
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-indigo-600 transition">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-indigo-600 transition">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 StudiFy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-indigo-600 text-sm transition">
              Terms & Conditions
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-gray-600 hover:text-indigo-600 text-sm transition">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
```

## frontend/src/components/Header.js

```js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-indigo-700">StudiFy</h1>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <button
          onClick={() => navigate('/features')}
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Features
        </button>
        <button
          onClick={() => navigate('/about')}
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          About Us
        </button>
        <button
          onClick={() => navigate('/contact')}
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Contact Us
        </button>
        <div className="flex gap-3 ml-4">
          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-50 transition"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Placeholder (optional future logic) */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-indigo-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Header;

```

## frontend/src/components/LandingPage.js

```js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center py-16 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
            </div>
            Your Complete Academic Companion
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            The ultimate platform for SGSITS students - combining semester studies with career preparation for 
            <span className="text-yellow-300 font-semibold"> Placements</span>, 
            <span className="text-green-300 font-semibold"> GATE</span>, 
            <span className="text-purple-300 font-semibold"> UPSC</span>, and 
            <span className="text-pink-300 font-semibold"> CAT</span>
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => navigate('/login')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Quick Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            From semester studies to career goals - we've got SGSITS students covered
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Semester Studies</h3>
              <p className="text-gray-600">Access notes, videos, and papers for all your subjects</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Career Preparation</h3>
              <p className="text-gray-600">GATE, CAT, UPSC and placement preparation resources</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Student Community</h3>
              <p className="text-gray-600">Connect with peers and share resources</p>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={() => navigate('/features')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Explore All Features
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Academic Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of SGSITS students who are already excelling with our platform
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Join StudiFy Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
```

## frontend/src/components/LoginPage.js

```js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const {
        token,
        name,
        email: userEmail,
        branch,
        currentSemester,
        goal
      } = response.data;

      const user = {
        name,
        email: userEmail,
        branch,
        currentSemester,
        goal
      };

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      useAuthStore.getState().setUser(user, token); // ✅ CORRECT USAGE

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Welcome Back
        </h2>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

```

## frontend/src/components/LogoutButton.js

```js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  console.log("✅ LogoutButton rendered");

  const handleLogout = () => {
    console.log("🧪 Logout button clicked");
    logout();
    localStorage.clear();

    toast.success("✅ Logged out successfully", {
      position: "top-center",
      autoClose: 1500,
      onClose: () => {
        console.log("🧭 Navigating to / after toast");
        navigate("/", { replace: true });
      },
    });

    setTimeout(() => {
      console.log("🧭 Fallback navigate");
      navigate("/", { replace: true });
    }, 2000);
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

```

## frontend/src/components/PlacementDashboard.jsx

```jsx
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';

export default function PlacementDashboard() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get('/api/career/placement/progress')
      .then(res => setTopics(res.data));
  }, []);

  const markAttempted = (topic) => {
    axios.post('/api/career/placement/attempt', {
      topic: topic.topic,
      link: topic.link
    }).then(() => {
      setTopics(prev => prev.map(t => t.topic === topic.topic ? { ...t, attempted: true } : t));
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">📘 Striver Sheet Progress</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {topics.map((topic, idx) => (
            <li key={idx} className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex flex-col justify-between h-full">
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-800">{topic.topic}</p>
                  <a
                    href={topic.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    🔗 LeetCode Link
                  </a>
                </div>
                <button
                  disabled={topic.attempted}
                  onClick={() => markAttempted(topic)}
                  className={`w-full py-2 rounded-lg text-white font-medium mt-auto transition ${
                    topic.attempted
                      ? 'bg-green-500 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  {topic.attempted ? "✅ Attempted" : "✔️ Mark as Done"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

```

## frontend/src/components/ProfileOverview.js

```js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileOverview() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get("http://localhost:8080/api/users/profile", {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
.then(res => console.log(res.data))
.catch(err => console.error("❌ Error fetching profile:", err));

  }, []);

  if (!profile) {
    return <p className="text-gray-500">Loading profile...</p>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4">
      <h3 className="text-xl font-semibold text-indigo-700 dark:text-white mb-3">👤 Profile Overview</h3>
      <div className="space-y-2 text-sm text-gray-700 dark:text-white">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Enrollment No.:</strong> {profile.enrollmentNumber}</p>
        <p><strong>Target Goal:</strong> {profile.goal}</p>
      </div>
    </div>
  );
}

```

## frontend/src/components/ProfilePage.js

```js
// src/components/ProfilePage.js

import Sidebar from './Sidebar';
import UserInfoCard from './UserInfoCard';
import AssignmentCalendar from './AssignmentCalendar';
import WeeklySchedule from './WeeklySchedule';
import RemindersPanel from './RemindersPanel';
import ThemeToggle from './ThemeToggle';
import TodoList from './TodoList';
import UserContributions from '../components/UserContributions';
import { useAuthStore } from '../stores/authStore';

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user); // ✅ use Zustand

  if (!user) return <div className="text-center p-10 text-gray-500">⏳ Loading profile...</div>;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-100 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Sidebar user={user} />

      <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-12 scroll-smooth">
        <section id="overview">
          <UserInfoCard /> {/* ✅ no props needed */}
        </section>

        <section id="calendar">
          <AssignmentCalendar />
        </section>

        <section id="schedule">
          <WeeklySchedule />
        </section>

        <section id="reminders">
          <RemindersPanel />
        </section>

        <section id="todos">
          <TodoList />
        </section>

        <section id="contribute">
          <UserContributions />
        </section>

      </main>
    </div>
  );
}


```

## frontend/src/components/ProtectedRoute.js

```js
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

```

## frontend/src/components/QuizPage.jsx

```jsx
// src/components/QuizPage.jsx
import React, { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import CareerQuiz from "./CareerQuiz";

export default function QuizPage() {
  const goal = useAuthStore((state) => state.user?.goal || "GATE");
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fadeIn">
        {!started ? (
          <>
            <h1 className="text-4xl font-bold text-indigo-700 mb-4 text-center">📝 {goal} Quiz</h1>
            <p className="text-gray-700 text-center mb-8">
              This quiz consists of <strong>20 random questions</strong> based on your career goal: <span className="text-indigo-600 font-semibold">{goal}</span>.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-400 text-gray-700 px-6 py-4 rounded-lg mb-6">
              <h2 className="font-semibold mb-2">📋 Instructions:</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>You will be asked 20 multiple choice questions.</li>
                <li>Each question has only one correct answer.</li>
                <li>Your score will be shown instantly after submission.</li>
                <li>No negative marking — just your best shot!</li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={() => setStarted(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition duration-300"
              >
                🚀 Start Quiz
              </button>
            </div>
          </>
        ) : (
          <CareerQuiz goal={goal} />
        )}
      </div>
    </div>
  );
}

```

## frontend/src/components/ReminderCard.jsx

```jsx
import React from 'react';

function formatGoogleDate(dateStr) {
  const dt = new Date(dateStr);
  return dt.toISOString().replace(/[-:]|\.\d{3}/g, '');
}

export default function ReminderCard({ reminder }) {
  const { title, description, start, end } = reminder;

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&details=${encodeURIComponent(description)}&dates=${formatGoogleDate(
    start
  )}/${formatGoogleDate(end)}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-5 space-y-3 w-full">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-violet-700 dark:text-violet-300">{title}</h4>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>

      {/* Time */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        🕒{' '}
        {new Date(start).toLocaleDateString(undefined, {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        })}{' '}
        | {new Date(start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} –{' '}
        {new Date(end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>

      {/* Button */}
      <div className="pt-2">
        <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-all shadow">
            ➕ Add to Google Calendar
          </button>
        </a>
      </div>
    </div>
  );
}

```

## frontend/src/components/RemindersPanel.js

```js
import React from 'react';
import ReminderCard from './ReminderCard';

const dummyReminders = [
  {
    title: 'Mid-Semester Exam',
    description: 'CSE301 - Algorithms Midsem',
    start: '2025-08-25T10:00:00',
    end: '2025-08-25T11:00:00',
  },
  {
    title: 'Assignment Deadline',
    description: 'Submit DBMS Assignment 2',
    start: '2025-07-10T23:59:00',
    end: '2025-07-10T23:59:00',
  },
];

export default function RemindersPanel() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-white">⏰ Reminders</h3>
      {dummyReminders.map((r, i) => (
        <ReminderCard key={i} reminder={r} />
      ))}
  
    </section>
   

  );
}

```

## frontend/src/components/Sidebar.js

```js
// src/components/Sidebar.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  User,
  Bell,
  CheckSquare,
  BookOpen,
  Share2,
  LogOut,
} from 'lucide-react';

export default function Sidebar({ user }) {
  const location = useLocation();
  const navigate = useNavigate();
  if (!user) return null;

  const goToProfileSection = (sectionId) => {
    if (location.pathname !== '/profile') {
      navigate(`/profile#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-700 text-white p-6 flex flex-col justify-between sticky top-0">
      {/* Top section */}
      <div>
        <div className="mb-8">
          <h2 className="text-xl font-bold truncate">🎓 {user.name}</h2>
          <p className="text-sm text-indigo-200 truncate">{user.enrollment}</p>
          <p className="text-sm text-indigo-200 truncate">Goal: {user.branch?.name}</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <NavItem label="Home" icon={<Home size={18} />} onClick={() => navigate('/dashboard')} />
          <NavItem label="Profile" icon={<User size={18} />} onClick={() => goToProfileSection('overview')} />
          <NavItem label="Reminders" icon={<Bell size={18} />} onClick={() => goToProfileSection('reminders')} />
          <NavItem label="To-Do List" icon={<CheckSquare size={18} />} onClick={() => goToProfileSection('todos')} />
          <NavItem label="Library" icon={<BookOpen size={18} />} onClick={() => goToProfileSection('schedule')} />
          <NavItem label="Contribute" icon={<Share2 size={18} />} onClick={() => navigate('/contribute')} />
        </nav>
      </div>

      {/* Logout */}
      <div className="mt-8">
        <button
          onClick={() => navigate('/logout')}
          className="flex items-center gap-2 text-sm text-indigo-200 hover:text-white transition duration-200"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:bg-indigo-500"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

```

## frontend/src/components/SignupPage.js

```js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👁️ Import eye icons

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    enrollment: "",
    branch: "",
    semester: "",
    dob: "",
    gender: "",
    goal: "",
    otherGoal: "",
    leetcode: "",
    github: "",
    skills: "",
    profilePic: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👁️ Eye toggle
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      setFormData({ ...formData, profilePic: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isFormValid = () => {
    const {
      name, email, password, enrollment, branch,
      semester, dob, gender, goal, otherGoal, leetcode, github, skills,
    } = formData;

    if (!name || !email || !password || !enrollment || !branch || !semester || !dob || !gender || !goal)
      return false;

    if (goal === "OTHERS" && !otherGoal) return false;
    if (goal === "PLACEMENT" && (!leetcode || !github || !skills)) return false;

    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!isFormValid()) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const requestBody = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      enrollmentNumber: formData.enrollment,
      branch: formData.branch,
      currentSemester: parseInt(formData.semester),
      dateOfBirth: formData.dob,
      gender: formData.gender,
      goal: formData.goal,
      otherGoal: formData.otherGoal || "",
      leetcodeUrl: formData.leetcode || "",
      githubUrl: formData.github || "",
      skills: formData.skills || "",
      profilePictureUrl: null,
    };

    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", requestBody, {
        headers: { "Content-Type": "application/json" },
      });

      const { token, name, email: userEmail, branch, currentSemester, goal } = res.data;

      const user = { name, email: userEmail, branch, currentSemester, goal };
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      useAuthStore.getState().setUser(user, token);

      navigate("/dashboard");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.response?.data?.error || "Signup failed";

      if (errorMessage.toLowerCase().includes("email already exists")) {
        setError("Email already exists. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2500);
      } else {
        setError("Signup failed: " + errorMessage);
      }

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />

          {/* 👁️ Password with eye toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <input type="text" name="enrollment" placeholder="Enrollment Number" required value={formData.enrollment} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />

          <div className="flex gap-4">
            <select name="branch" value={formData.branch} onChange={handleChange} className="w-1/2 px-4 py-2 border rounded-lg" required>
              <option value="">Select Branch</option>
              <option value="ECE">ECE</option>
              <option value="IT">IT</option>
            </select>
            <select name="semester" value={formData.semester} onChange={handleChange} className="w-1/2 px-4 py-2 border rounded-lg" required>
              <option value="">Select Semester</option>
              {[3, 4, 5, 6].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />

          <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select name="goal" value={formData.goal} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select Goal</option>
            <option value="PLACEMENT">Placement</option>
            <option value="UPSC">UPSC</option>
            <option value="GATE">GATE</option>
            <option value="CAT">CAT</option>
            <option value="OTHERS">Others</option>
          </select>

          {/* Conditional fields */}
          {formData.goal === "OTHERS" && (
            <input type="text" name="otherGoal" placeholder="Please specify" value={formData.otherGoal} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
          )}

          {formData.goal === "PLACEMENT" && (
            <>
              <input type="url" name="leetcode" placeholder="LeetCode URL" value={formData.leetcode} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <input type="url" name="github" placeholder="GitHub URL" value={formData.github} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
            </>
          )}

          <button type="submit" disabled={loading} className={`w-full ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} text-white py-2 rounded-lg transition`}>
            {loading ? "Registering..." : "Sign Up"}
          </button>

          {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;

```

## frontend/src/components/StriverProgressSection.jsx

```jsx
// src/components/StriverProgressSection.jsx
import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";

export default function StriverProgressSection() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get("api/career/placement/progress")
      .then(res => setTopics(res.data))
      .catch(() => console.error("Failed to load Striver topics"));
  }, []);

  const toggleAttempt = (topic) => {
    axios.post("api/career/placement/attempt", {
      topic: topic.topic,
      link: topic.link
    }).then(() => {
      setTopics(prev => prev.map(t => t.topic === topic.topic ? { ...t, attempted: true } : t));
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">💻 Striver Sheet</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((t) => (
          <li
            key={t.topic}
            className={`p-4 rounded-xl shadow border-l-4 ${t.attempted ? 'border-green-400 bg-green-50' : 'border-gray-300 bg-white'}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-md font-semibold text-gray-800">{t.topic}</h4>
                <a
                  href={t.link}
                  className="text-sm text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Practice Link
                </a>
              </div>
              {!t.attempted && (
                <button
                  onClick={() => toggleAttempt(t)}
                  className="text-sm bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                >
                  Mark Done
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

```

## frontend/src/components/SubjectsPage.jsx

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header"; 

import { useParams, useSearchParams, useNavigate } from "react-router-dom";

export default function SubjectPage() {
  const { semesterId } = useParams();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const branch = searchParams.get("branch");

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/semesters/${semesterId}/subjects?branch=${branch}`
        );
        setSubjects(res.data);
      } catch (err) {
        console.error("Error fetching subjects:", err);
        setError("Failed to load subjects.");
      } finally {
        setLoading(false);
      }
    };

    if (branch && semesterId) fetchSubjects();
  }, [semesterId, branch]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-blue-100">
      {/* ✅ Shared Header */}
      <Header />

      {/* Page-specific Info Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center py-8 px-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-1">📘 Subjects</h2>
        <p className="text-sm">Explore your subjects with notes, videos, PDFs and more!</p>
        <div className="mt-2 text-sm">
          Semester <span className="font-semibold">{semesterId}</span> — <span className="uppercase font-semibold">{branch}</span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        {loading ? (
          <div className="text-center text-indigo-700 text-lg">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : subjects.length === 0 ? (
          <div className="text-center text-gray-600">No subjects found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="cursor-pointer bg-white p-6 rounded-xl shadow border-l-4 border-indigo-500 hover:border-indigo-700 transition transform hover:scale-105"
                onClick={() =>
                  navigate(`/subjects/${subject.id}/units?name=${subject.name}`)
                }
              >
                <h3 className="text-xl font-semibold text-indigo-700">{subject.name}</h3>
                <p className="text-gray-600 text-sm mb-2">Code: {subject.code}</p>
                <p className="text-gray-500 text-sm">
                  Click to view curated notes, PDFs, and lecture videos for {subject.name}.
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

```

## frontend/src/components/ThemeToggle.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow hover:scale-105 transition"
      title="Toggle theme"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-indigo-800" />}
    </button>
  );
}

```

## frontend/src/components/TodoList.js

```js
import React, { useState } from 'react';
import { Check, Trash2, Plus } from 'lucide-react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete Data Structures Assignment", done: false, userId: 1 },
    { id: 2, text: "Prepare for GATE Mock Test", done: true, userId: 1 },
    { id: 3, text: "Review Operating Systems Notes", done: false, userId: 1 },
    { id: 4, text: "Submit Project Report", done: false, userId: 1 }
  ]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTodo = () => {
    if (!newTask.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: newTask,
      done: false,
      userId: 1
    };

    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.done).length;
  const totalCount = todos.length;

  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Check className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">To-Do List</h3>
              <p className="text-indigo-100">Stay organized and productive</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-indigo-100">Progress</p>
            <p className="text-xl font-bold">{completedCount}/{totalCount}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 pt-4">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      {/* Add Task Form */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex gap-3">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
            className="flex-1 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 text-sm dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-xl transition-all duration-200 shadow hover:shadow-lg flex items-center gap-2"
          >
            <Plus size={18} />
            <span className="font-semibold text-sm">Add</span>
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="p-6">
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500">Loading tasks...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        )}

        {todos.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-indigo-600" />
            </div>
            <p className="text-gray-500 text-lg">No tasks yet!</p>
            <p className="text-gray-400">Add your first task to get started 🎯</p>
          </div>
        )}

        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`group p-4 rounded-xl transition-all duration-200 flex justify-between items-center ${
                todo.done
                  ? 'bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-600'
                  : 'bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleDone(todo.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    todo.done
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 dark:border-gray-600 hover:border-indigo-500'
                  }`}
                >
                  {todo.done && <Check size={14} />}
                </button>
                <span
                  className={`text-sm font-medium transition-all duration-200 ${
                    todo.done ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="opacity-0 group-hover:opacity-100 w-8 h-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center transition-all duration-200"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TodoList;

```

## frontend/src/components/ui/button.jsx

```jsx
export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium disabled:opacity-50"
    >
      {children}
    </button>
  );
}

```

## frontend/src/components/ui/card.jsx

```jsx
export function Card({ children, className }) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

```

## frontend/src/components/ui/input.jsx

```jsx
export function Input(props) {
  return (
    <input
      {...props}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
    />
  );
}

```

## frontend/src/components/ui/label.jsx

```jsx
export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
      {children}
    </label>
  );
}

```

## frontend/src/components/ui/select.jsx

```jsx
export function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
    >
      {children}
    </select>
  );
}

export function SelectItem({ children, value }) {
  return <option value={value}>{children}</option>;
}

export function SelectTrigger({ children }) {
  return <>{children}</>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

```

## frontend/src/components/ui/textarea.jsx

```jsx
export function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600"
    />
  );
}

```

## frontend/src/components/UnitPage.js

```js
// src/pages/UnitPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import CommentSection from "../components/CommentSection";

export default function UnitPage() {
  const { subjectId } = useParams();
  const [searchParams] = useSearchParams();
  const subjectName = searchParams.get("name");

  const [units, setUnits] = useState([]);
  const [activeUnitIndex, setActiveUnitIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("VIDEO");

  const [resources, setResources] = useState([]);
  const [pyqs, setPyqs] = useState([]);

  

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/subjects/${subjectId}/units`)
      .then((res) => setUnits(res.data));
  }, [subjectId]);

  useEffect(() => {
    const unitId = units[activeUnitIndex]?.id;
    if (!unitId) return;

    axios
      .get(`http://localhost:8080/api/units/${unitId}/resources`)
      .then((res) => setResources(res.data));

    axios
      .get(`http://localhost:8080/api/units/${unitId}/pyqs`)
      .then((res) => setPyqs(res.data));
  }, [units, activeUnitIndex]);

  const filteredResources = resources.filter((r) => r.type === activeTab);

  const getEmbedUrl = (url) => {
    const videoMatch = url.match(/watch\?v=([a-zA-Z0-9_-]+)/);
    const playlistMatch = url.match(/playlist\?list=([a-zA-Z0-9_-]+)/);

    if (videoMatch) {
      return `https://www.youtube.com/embed/${videoMatch[1]}`;
    } else if (playlistMatch) {
      return `https://www.youtube.com/embed/videoseries?list=${playlistMatch[1]}`;
    } else if (url.includes("youtube.com/embed/")) {
      return url;
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="px-6 py-4 bg-white shadow sticky top-0 z-10">
        <h1 className="text-xl font-bold text-indigo-700">
          {subjectName} — Units
        </h1>
        <p className="text-sm text-gray-500">Select a unit to explore</p>
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 py-4">
        {units.map((unit, idx) => (
          <button
            key={unit.id}
            onClick={() => setActiveUnitIndex(idx)}
            className={`px-4 py-2 rounded-full ${
              idx === activeUnitIndex
                ? "bg-indigo-600 text-white"
                : "bg-white border text-indigo-600"
            }`}
          >
            {unit.title || `Unit ${idx + 1}`}
          </button>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        {["VIDEO", "NOTE", "BOOK", "PYQ"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              tab === activeTab
                ? "bg-indigo-500 text-white"
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-6">
        {activeTab !== "PYQ" ? (
          filteredResources.length === 0 ? (
            <p className="text-gray-500">No {activeTab.toLowerCase()}s found.</p>
          ) : (
            filteredResources.map((r) => (
              <div key={r.id} className="bg-white p-4 rounded-xl shadow-md border mb-4">
                <h2 className="font-semibold text-indigo-700 mb-2">{r.title}</h2>
                {r.type === "VIDEO" ? (
                  getEmbedUrl(r.url) ? (
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                      <iframe
                        src={getEmbedUrl(r.url)}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        title={r.title}
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <p className="text-red-500 text-sm">Invalid video URL</p>
                  )
                ) : (
                  <a
                    href={r.url}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View {r.type.toLowerCase()}
                  </a>
                )}
              </div>
            ))
          )
        ) : pyqs.length === 0 ? (
          <p className="text-gray-500">No previous year questions found.</p>
        ) : (
          pyqs.map((pyq) => (
            <div key={pyq.id} className="bg-white p-4 rounded shadow mb-4">
              <h3 className="font-bold text-indigo-700 mb-2">{pyq.questionText}</h3>
              <a href={pyq.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View PYQ PDF
              </a>
              <CommentSection contextType="PYQ" contextId={pyq.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

```

## frontend/src/components/UserComments.jsx

```jsx
// src/components/UserComments.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../stores/authStore";

export default function UserComments() {
  const { user, token } = useAuthStore();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!user) return;

    axios
      .get(`http://localhost:8080/api/comments/user/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setComments(res.data))
      .catch((err) => {
        console.error("Error fetching user comments:", err);
      });
  }, [user]);

  if (!user) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
        💬 Your Comments
      </h2>
      {comments.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="border-b pb-2">
              <p className="text-sm">{c.commentText}</p>
              {c.driveLink && (
                <a
                  href={c.driveLink}
                  className="text-blue-500 text-xs underline block"
                  target="_blank"
                  rel="noreferrer"
                >
                  📎 Drive Link
                </a>
              )}
              <div className="text-xs text-gray-400 mt-1">
                {c.contextType} #{c.contextId} • {new Date(c.timestamp).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

```

## frontend/src/components/UserContribution.js

```js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserContributions() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:8080/api/contributions/my', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContributions(res.data);
      } catch (err) {
        console.error('Error fetching contributions:', err);
      }
    };

    fetchContributions();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">📤 Your Contributions</h3>
      {contributions.length === 0 ? (
        <p className="text-gray-500">You haven’t contributed anything yet.</p>
      ) : (
        <ul className="space-y-2">
          {contributions.map(c => (
            <li key={c.id} className="border p-3 rounded">
              <p className="font-bold">{c.title} <span className="text-sm text-indigo-600">({c.type})</span></p>
              <p className="text-sm">{c.description}</p>
              <p className="text-xs text-gray-400">📅 {new Date(c.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserContributions;

```

## frontend/src/components/UserContributions.jsx

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserContributions() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/contributions/my', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => setContributions(res.data))
      .catch((err) => console.error('❌ Error fetching contributions:', err));
  }, []);

  if (!contributions.length) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md text-center text-gray-500 dark:text-gray-300">
        📭 No contributions yet.
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center text-lg font-bold">
          🧩
        </div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Your Contributions</h2>
      </div>

      {/* List */}
      <div className="space-y-4">
        {contributions.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all hover:shadow-md"
          >
            <h3 className="text-md font-semibold text-indigo-700 dark:text-indigo-300">{c.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{c.description}</p>
            <p className="text-xs text-indigo-500 dark:text-indigo-400 mt-2">
              {c.type} •{' '}
              <a href={c.url} target="_blank" rel="noreferrer" className="underline hover:text-indigo-600">
                View
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserContributions;

```

## frontend/src/components/UserInfoCard.js

```js
import React from 'react';
import {
  User,
  GraduationCap,
  CalendarDays,
  Goal,
  BadgeInfo,
  IdCard,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../stores/authStore';

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 bg-indigo-50 px-4 py-3 rounded-xl shadow-sm w-full">
      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md text-indigo-600 shadow">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-indigo-700 font-semibold">{label}</span>
        <span className="text-base text-gray-800 font-medium">{value || 'N/A'}</span>
      </div>
    </div>
  );
}

export default function UserInfoCard() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <p className="text-gray-500">Loading user info...</p>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* Header */}
      <div className="rounded-t-2xl px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white w-full">
        <h3 className="text-2xl font-bold">Profile Overview</h3>
        <p className="text-sm text-indigo-100">Your Academic Information</p>
      </div>

      {/* Info Rows */}
      <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-b-2xl shadow-xl w-full">
        <InfoRow icon={<User size={20} />} label="Full Name" value={user.name} />
        <InfoRow icon={<BadgeInfo size={20} />} label="Email Address" value={user.email} />
        <InfoRow icon={<IdCard size={20} />} label="Enrollment Number" value={user.enrollmentNumber} />
        <InfoRow icon={<GraduationCap size={20} />} label="Branch" value={user.branch?.name || user.branch} />
        <InfoRow icon={<CalendarDays size={20} />} label="Current Semester" value={user.currentSemester} />
        <InfoRow icon={<Goal size={20} />} label="Career Goal" value={user.goal?.name || user.goal} />
      </div>
    </motion.section>
  );
}

```

## frontend/src/components/WeeklySchedule.js

```js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import './calendarStyles.css'; // ✅ Custom styles for events (as updated earlier)

const fakeClasses = [
  // Monday
  { title: '📐 Mathematics - Lecture', start: '2025-06-30T09:00:00', end: '2025-06-30T10:00:00', className: 'event-math' },
  { title: '🧪 Physics Lab', start: '2025-06-30T11:00:00', end: '2025-06-30T13:00:00', className: 'event-physics' },

  // Tuesday
  { title: '💻 DSA - Theory', start: '2025-07-01T10:00:00', end: '2025-07-01T11:30:00', className: 'event-dsa' },
  { title: '📘 Digital Electronics', start: '2025-07-01T14:00:00', end: '2025-07-01T15:30:00', className: 'event-de' },

  // Wednesday
  { title: '📝 Communication Skills', start: '2025-07-02T09:30:00', end: '2025-07-02T10:30:00', className: 'event-english' },
  { title: '⚙️ Microprocessors', start: '2025-07-02T12:00:00', end: '2025-07-02T13:30:00', className: 'event-micro' },

  // Thursday
  { title: '📐 Math Tutorial', start: '2025-07-03T08:30:00', end: '2025-07-03T09:30:00', className: 'event-math' },
  { title: '💻 DSA Lab', start: '2025-07-03T10:00:00', end: '2025-07-03T12:00:00', className: 'event-dsa' },

  // Friday
  { title: '📘 VLSI Design', start: '2025-07-04T11:00:00', end: '2025-07-04T12:30:00', className: 'event-de' },
  { title: '⚙️ Embedded Systems', start: '2025-07-04T14:00:00', end: '2025-07-04T15:30:00', className: 'event-micro' },

  // Saturday
  { title: '💼 Soft Skills Workshop', start: '2025-07-05T10:00:00', end: '2025-07-05T12:00:00', className: 'event-english' },
  { title: '🔬 Physics - Doubt Clearing', start: '2025-07-05T13:00:00', end: '2025-07-05T14:00:00', className: 'event-physics' },
];


export default function WeeklySchedule() {
  return (
    <section className="w-full">
      {/* Gradient Header */}
      <div className="rounded-t-2xl px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h3 className="text-2xl font-bold">📘 Weekly Class Schedule</h3>
        <p className="text-sm text-indigo-100">Plan your week ahead with clarity</p>
      </div>

      {/* Calendar Block */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-b-2xl shadow-xl">
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          allDaySlot={false}
          slotMinTime="08:00:00"
          slotMaxTime="20:00:00"
          height={500}
          events={fakeClasses}
        />
      </div>
    </section>
  );
}

```

## frontend/src/context/ThemeContext.js

```js
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

```

## frontend/src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

## frontend/src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

## frontend/src/main.jsx

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

```

## frontend/src/pages/CareerGoalPage.jsx

```jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axiosConfig";
import StriverProgressSection from "../components/StriverProgressSection";

export default function CareerGoalPage() {
  const { goal } = useParams();
  const upperGoal = goal.toUpperCase();
  const [resources, setResources] = useState([]);
  const [activeTab, setActiveTab] = useState("VIDEO");
  const [loading, setLoading] = useState(true);

  const baseTabs = ["VIDEO", "NOTE", "BOOK"];
  const tabs = upperGoal === "PLACEMENT" ? [...baseTabs, "STRIVER"] : baseTabs;

  useEffect(() => {
    axios
      .get(`/api/career/${upperGoal}`)
      .then((res) => {
        setResources(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load resources:", err);
        setLoading(false);
      });
  }, [upperGoal]);

  const filteredResources = resources.filter(
    (r) => r.type?.toUpperCase().trim() === activeTab.toUpperCase()
  );

  const getEmbedUrl = (url) => {
    const videoMatch = url.match(/watch\?v=([a-zA-Z0-9_-]+)/);
    const playlistMatch = url.match(/playlist\?list=([a-zA-Z0-9_-]+)/);

    if (videoMatch) {
      return `https://www.youtube.com/embed/${videoMatch[1]}`;
    } else if (playlistMatch) {
      return `https://www.youtube.com/embed/videoseries?list=${playlistMatch[1]}`;
    } else if (url.includes("youtube.com/embed/")) {
      return url;
    }
    return "";
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-indigo-600 text-xl animate-pulse">
        Loading {goal} resources...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="px-6 py-4 bg-white shadow sticky top-0 z-10">
        <h1 className="text-xl font-bold text-indigo-700 capitalize">
          {goal} — Resources
        </h1>
        <p className="text-sm text-gray-500">Select a tab to explore</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-indigo-500 text-white"
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            {tab === "STRIVER" ? "Striver Sheet" : tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-6 max-w-6xl mx-auto">
        {activeTab === "STRIVER" ? (
          <div className="bg-white p-6 rounded-xl shadow border">
            <StriverProgressSection />
          </div>
        ) : filteredResources.length === 0 ? (
          <p className="text-gray-500 text-center">
            No {activeTab.toLowerCase()}s found.
          </p>
        ) : (
          filteredResources.map((r) => (
            <div
              key={r.id}
              className="bg-white p-4 rounded-xl shadow-md border mb-4"
            >
              <h2 className="font-semibold text-indigo-700 mb-2">{r.title}</h2>
              {r.type === "VIDEO" ? (
                getEmbedUrl(r.url) ? (
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                    <iframe
                      src={getEmbedUrl(r.url)}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      title={r.title}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <p className="text-red-500 text-sm">Invalid video URL</p>
                )
              ) : (
                <a
                  href={r.url}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View {r.type.toLowerCase()}
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

```

## frontend/src/pages/ContributePage.jsx

```jsx
import React, { useState, useEffect } from "react";
import api from "../utils/axiosConfig"; // ✅ Use the new axios instance
import CommentSection from "../components/CommentSection";

function extractFileId(url) {
  const match = url.match(/(?:file\/d\/|id=)([a-zA-Z0-9_-]{10,})/);
  return match ? match[1] : null;
}

const ContributePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    subject: "",
    visibility: "",
    url: "",
  });

  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    api
      .get("/api/contributions/my")
      .then((res) => setContributions(res.data))
      .catch((err) => {
        console.error("GET contributions error:", err);
        alert("❌ Failed to fetch contributions");
      });
      
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const isValidDrive = /^https:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=)/.test(formData.url);
  if (!isValidDrive) {
    alert("❌ Invalid Google Drive link");
    return;
  }

  try {
    console.log("🔍 Payload about to send:", JSON.stringify(formData));

await api.post("/api/contributions/add", JSON.stringify(formData), {
  headers: {
    "Content-Type": "application/json"
  }
});
    alert("✅ Contribution submitted");
    setFormData({ title: "", description: "", type: "", subject: "", visibility: "", url: "" });

    const res = await api.get("/api/contributions/my");
    setContributions(res.data);
  } catch (err) {
    console.error("POST contribution error:", err);
    alert("❌ Submission failed");
  }
};


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold">📤 Contribute Resource</h2>
        <input className="w-full p-2 border rounded" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea className="w-full p-2 border rounded" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" name="type" placeholder="Type (e.g. Notes, Video)" value={formData.type} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <select className="w-full p-2 border rounded" name="visibility" value={formData.visibility} onChange={handleChange} required>
          <option value="">Select Visibility</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <input className="w-full p-2 border rounded" type="url" name="url" placeholder="Google Drive Link" value={formData.url} onChange={handleChange} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>

      <div className="mt-8 space-y-6">
        <h3 className="text-lg font-semibold">🧾 Your Contributions</h3>
        {contributions.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md p-4 space-y-2">
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
            <iframe
              className="w-full h-52 rounded border"
              src={`https://drive.google.com/file/d/${extractFileId(item.url)}/preview`}
              allow="autoplay"
              title={item.title}
            />
            <CommentSection contextType="CONTRIBUTION" contextId={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributePage;

```

## frontend/src/pages/ProfilePage.jsx

```jsx
import React from 'react';
import UserContributions from '../components/UserContributions';

function ProfilePage() {
  return (
    <>

      <UserContributions />
    </>
  );
}

export default ProfilePage;

```

## frontend/src/reportWebVitals.js

```js
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

## frontend/src/setupTests.js

```js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

## frontend/src/stores/authStore.js

```js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setUser: (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));

```

## frontend/src/utils/axiosConfig.js

```js
// src/utils/axiosConfig.js
import axios from "axios";
import { useAuthStore } from "../stores/authStore";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
});

// ✅ Automatically attach token from Zustand
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;

```

## README.md

```md
A personalized student support platform combining academic semester resources and career preparation tools. Built with Java, React, Tailwind CSS, and PostgreSQL, it offers features like semester-wise subject content, GATE/placement prep, streak and badge tracking, and a community-driven contribution system.

```
