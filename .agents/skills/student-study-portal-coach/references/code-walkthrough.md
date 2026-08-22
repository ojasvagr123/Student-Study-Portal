# Repository-grounded code walkthrough

Use this method when the learner asks how a feature works in code.

1. State the user action and expected outcome in one sentence.
2. Locate the frontend route/page and event handler.
3. Trace state reads/writes and the exact Axios request.
4. Match method, path, body, headers, and response to a backend controller.
5. Follow controller -> service -> repository -> entity/database.
6. Explain Spring/React behavior supplied by the framework even when no explicit code exists.
7. Trace the response back to state and UI.
8. Cover validation, authentication, authorization, errors, and edge cases.
9. Identify mismatches or risks only after verifying the current source.
10. Finish with breakpoints and one active-recall trace question.

For each important hop, show the relative file, symbol, and relevant line span. Prefer short excerpts or paraphrases over dumping whole files. Mark claims as `IMPLEMENTED`, `INFERRED`, `TARGET`, or `HISTORICAL CLAIM` when ambiguity matters.

Suggested breakpoint map:

- Frontend event handler and Axios interceptor
- JWT filter and controller method
- Service branch containing business logic
- Repository invocation
- Response mapping and frontend state update

If an endpoint contract does not match across frontend and backend, show both sides and explain the runtime symptom before proposing a fix.
