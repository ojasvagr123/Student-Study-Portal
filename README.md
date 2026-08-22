# Studify — Student Study Portal

Studify is a React and Spring Boot modular monolith for academic resources, career preparation,
quizzes, contributions, comments, profiles, and private study tasks.

## Architecture

- `frontend/`: React 19, Vite, Tailwind CSS, Zustand
- `backend/`: Java 17, Spring Boot, Spring Security, JPA, Flyway
- PostgreSQL is the production database
- JWT bearer authentication protects all private APIs

## Local development

Prerequisites: Java 17, Node.js 20+, and PostgreSQL.

1. Copy `.env.example` values into your shell or IDE run configuration.
2. Create the PostgreSQL database named `studentcompanion`.
3. Set a random `JWT_SECRET` containing at least 32 bytes.
4. Start the API:

   ```powershell
   cd backend
   .\gradlew.bat bootRun
   ```

5. Start the web application in another terminal:

   ```powershell
   cd frontend
   npm ci
   npm run dev
   ```

The frontend runs at `http://localhost:5173` and proxies API calls to port 8080.

### Local administrator

When the `local` profile starts successfully for the first time, Studify creates a local-only
administrator using the bootstrap values in `application-local.properties`. The default login is
`admin@gmiai.com` with password `admin123`. Change it through `ADMIN_EMAIL` and `ADMIN_PASSWORD`
for shared development environments. The known default is disabled in the production profile.

After login, administrators are redirected to `/admin`, where they can manage users, roles,
account status, branches, semesters, subjects, units, academic resources, and career resources.

## Verification

```powershell
cd backend
.\gradlew.bat clean test

cd ..\frontend
npm ci
npm test
npm run build
```

## Production environment

Required backend variables:

- `DATABASE_URL` or the `PGHOST`, `PGPORT`, and `PGDATABASE` group
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`
- `JWT_SECRET`
- `CORS_ALLOWED_ORIGINS` as a comma-separated list of exact frontend origins
- `SPRING_PROFILES_ACTIVE=prod`

Required frontend variable:

- `VITE_API_URL`, for example `https://studify-api.onrender.com`

Flyway applies versioned migrations. Hibernate validates rather than mutates the production schema.
The API exposes `/actuator/health` for deployment health checks.

## Deployment

`render.yaml` provisions PostgreSQL, the Dockerized API, and a static frontend on Render. Set the
two `sync: false` values after the services are created:

- API `CORS_ALLOWED_ORIGINS` → exact deployed frontend URL
- Web `VITE_API_URL` → exact deployed API URL

For Vercel, use `frontend` as the root directory, `npm run build` as the build command, `dist` as
the output directory, and set `VITE_API_URL`. `frontend/vercel.json` supplies the SPA fallback.

Local filesystem uploads are deliberately disabled by the production profile because free hosting
filesystems are ephemeral. Use contribution URLs now; connect an object-storage provider before
enabling binary uploads in production.

## Security notes

- Never commit `.env` files, database passwords, JWT secrets, or personal uploads.
- User ownership is derived from the authenticated JWT, not request-supplied user IDs.
- Admin endpoints require the `ADMIN` authority.
- API responses use safe DTOs and do not serialize password hashes.
