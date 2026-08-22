# Studify Learning & Interview Coach

This package supports two ways to use the same coach:

## ChatGPT Plus sharing

Create a ChatGPT Project named **Studify Learning & Interview Coach**. Paste `CHATGPT_PROJECT_INSTRUCTIONS.md` into the Project instructions, then upload:

1. `STUDIFY_SOURCE_BUNDLE.md`
2. `Student_Study_Portal_Complete_Learning_and_Interview_Guide.docx` from the ZIP

Start with: “Assess my current knowledge in five questions, build my mastery path, and begin Module 1.”

After testing the Project, use its **Share** control and invite collaborators or copy the share link available to your account/workspace. Give collaborators chat access unless they should be able to alter instructions and files.

## Codex use

The repository contains `.agents/skills/student-study-portal-coach`. Open this repository in Codex and ask:

> Use $student-study-portal-coach to teach me the complete Studify project, including code walkthroughs and interview preparation.

To share the Codex version, share the repository including the `.agents/skills/student-study-portal-coach` folder. The agent verifies explanations against the recipient's current checkout.

## Recommended starter prompts

- “Give me a complete learning roadmap and start with the architecture.”
- “Walk me through login from the React form to JWT validation, line by line.”
- “Quiz me on Spring Security and keep a revisit list.”
- “Run a realistic full-stack mock interview, one question at a time.”
- “Help me produce a two-minute project explanation without exaggerating.”
- “Show the current architecture and a defensible production/AI roadmap.”

Do not upload raw secret-bearing configuration files. The generated bundle intentionally excludes `application.properties`, environment files, build outputs, dependencies, and Git metadata.
