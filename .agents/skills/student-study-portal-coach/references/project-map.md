# Project map and truth baseline

Use this as a routing index, then verify details in current source.

## Product and architecture

Student Study Portal is a React single-page application backed by a Java 17 Spring Boot modular monolith and PostgreSQL. Its main modules are authentication, academic resources, career preparation, quizzes, placement progress, contributions, comments, todos, and profiles.

The owner reports historical deployment on Vercel (frontend), Render (backend), and Supabase (PostgreSQL). The audited repository snapshot contained localhost database/API/CORS settings and no deployment manifests. Treat deployment as a historical claim plus a target reconstruction unless current files prove otherwise.

## High-value source routes

- Bootstrap and dependencies: `backend/build.gradle`, `backend/src/main/java/com/studentcompanion/StudentCompanionApplication.java`
- Runtime configuration: `backend/src/main/resources/application.properties`
- Security: `config/SecurityConfig.java`, `filter/JwtAuthenticationFilter.java`, `util/JwtUtil.java`
- Authentication: `controller/AuthController.java`, `service/CustomUserDetailsService.java`, `model/User.java`, `model/Role.java`
- Academics: `controller/StudyResourceController.java`, `service/StudyResourceService.java`, academic models/repositories
- Career and quiz: `controller/CareerController.java`, `controller/QuizController.java`, related models/repositories
- Community/productivity: `ContributionController`, `CommentController`, `TodoController`
- Frontend composition: `frontend/src/App.js`, `frontend/src/index.js`
- Frontend auth/HTTP: `frontend/src/stores/authStore.js`, `frontend/src/utils/axiosConfig.js`, `LoginPage.js`, `SignupPage.js`, `ProtectedRoute.js`
- Academic UI: `SubjectsPage.jsx`, `UnitPage.js`
- Career/community UI: `pages/CareerGoalPage.jsx`, `pages/ContributePage.jsx`
- Broad future schema artifact: `database/schema.sql`; do not assume every table is implemented by JPA.
- Full learning guide: `docs/Student_Study_Portal_Complete_Learning_and_Interview_Guide.docx`

## Canonical request flows

1. Login: React -> AuthController -> AuthenticationManager -> DaoAuthenticationProvider -> CustomUserDetailsService -> BCrypt -> JwtUtil -> browser token.
2. Authenticated API: Axios bearer header -> JwtAuthenticationFilter -> SecurityContext -> controller -> service/repository.
3. Academics: semester/branch -> subjects -> units -> resources and PYQs.
4. Contributions/comments: authenticated principal -> user-owned entity -> repository -> contextual UI.
5. Career/quiz: goal enum -> filtered resources/questions -> progress or server-side scoring.

## Known high-priority findings from the audited snapshot

- Database password and JWT secret were tracked in properties. Never reproduce them; recommend rotation and environment secrets.
- Security used a broad `anyRequest().permitAll()` fallback.
- CORS and many frontend API calls were localhost-specific.
- Zustand/localStorage token behavior and duplicated auth/API code could diverge after refresh.
- Local upload storage is unsuitable for ephemeral/horizontally scaled hosting.
- Hibernate `ddl-auto=update` should become versioned migrations plus production validation.
- Backend compiled, but Gradle reported no test sources in the audited snapshot.
- Several frontend calls did not match visible backend routes; re-check current code before teaching them as active defects.

## Future and AI direction

Foundation first: secrets, default-deny authorization, ownership, configuration, tests, migrations, object storage, observability. Then improve search/progress/moderation. The recommended first AI feature is subject-scoped semantic search and cited RAG over approved documents, with authorization before retrieval, abstention, evaluation, quotas, privacy controls, and graceful fallback.
