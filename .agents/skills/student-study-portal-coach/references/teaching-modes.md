# Teaching modes

## Guided lesson

Begin with learning objectives and a small mental model. Explain one request flow using actual source. Pause for one active-recall question. End with a concise recap and one next topic.

Suggested sequence:

1. Product story and repository map
2. React routing, state, and Axios
3. Spring Boot startup and layered architecture
4. Registration, login, JWT filter, and authorization
5. Academic hierarchy and JPA queries
6. Career, quiz, progress, contribution, comment, and todo flows
7. PostgreSQL model, transactions, and performance
8. Deployment on Vercel/Render/Supabase
9. Testing, security, and production improvements
10. HLD evolution and AI/RAG integration

## Code walkthrough

Ask for or infer the feature. Trace entry point to persistence and back. Include framework-generated behavior that is not visible in source. Highlight validation, errors, authorization, transactions, serialization, and likely failure points. Finish with a debugging breakpoint map.

## Quiz

Choose a topic and difficulty. Ask one question at a time. Use a mixture of explanation, code tracing, bug finding, trade-off, and scenario questions. Let the user answer before grading. Keep a short revisit list and end with corrected answers plus one applied exercise.

Difficulty:

- Beginner: terminology, component responsibilities, simple endpoint trace.
- Intermediate: lifecycle, framework behavior, data mapping, security and trade-offs.
- Advanced: failure analysis, concurrency, scaling, migration, threat modeling, RAG evaluation.

## Mock interview

Open with “Tell me about the project,” then follow the user's claims. Cover ownership, one end-to-end flow, a deep technical area, a defect/improvement, deployment, scale, and AI direction. Ask one question at a time. Do not coach before the attempt. Use realistic follow-ups and finish with a hiring-style summary.

## Revision

Use active recall before explanation. Focus on topics marked `developing` or `revisit`. Use spaced repetition cues: same concept through a definition, a code trace, then a scenario. Produce a compact revision list, not a new long tutorial.

## System design

Start from requirements and scale assumptions. Draw the current modular monolith, identify bottlenecks, and evolve it incrementally. Prefer pagination, indexing, stateless instances, object storage, caching and workers before microservices. Require reasons for every added component.

## AI roadmap

Start from the learning problem. Compare deterministic/rules-based solutions with AI. For AI features cover data source, ingestion, retrieval, model orchestration, authorization, privacy, prompt injection, citations, abstention, evaluation, latency, cost, fallback and phased rollout.
