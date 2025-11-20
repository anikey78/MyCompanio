# MyCompanio - Deployment & Security Guide

This package contains:
- Frontend (Vite/React) — source files (in root), `Dockerfile.frontend` for containerized build+serve
- Backend (Express) — `backend/` with scaffold, `Dockerfile` for containerized backend
- nginx.conf configured to proxy `/api` to backend
- docker-compose.yml to run both services
- `.env.example` with required environment variables
- `public/logo.png` (your uploaded logo)

## Quick local test (recommended)
1. Copy `.env.example` to `.env` and fill values.
2. Build and run with docker-compose:
   ```
   docker-compose up --build
   ```
   - Frontend will be available on port 80, backend on port 5000.
3. Visit `http://localhost/api/health` to check backend.

## Notes about ChatGPT/OpenAI integration (IMPORTANT)
- **Do NOT place your OpenAI key in client-side code.** Use the backend `/api/chat` endpoint to call OpenAI.
- The current `/api/chat` endpoint is a placeholder echo to allow UI testing without keys.
- When ready to enable ChatGPT calls:
  1. Add `OPENAI_API_KEY` to `.env` on your server (never in git).
  2. Implement server-side OpenAI call using official SDK or fetch from backend.
  3. Add rate-limiting, input filtering, and logging to prevent abuse.

## Supabase (Auth & DB) suggestions
- You can use Supabase for authentication and DB:
  - Use Supabase JS on frontend for signup/login.
  - Use Supabase service_role key only on the server (never on client).
  - Verify Supabase JWT on backend for protected routes.
- This repo contains a skeleton `POST /api/auth/supabase/webhook` to handle events if needed.

## Deploying to GoDaddy (if using VPS)
1. If you bought a GoDaddy domain and have a VPS (DigitalOcean/AWS), point A record:
   - GoDaddy DNS -> Add/Edit `A` record for `@` -> IP of your server.
   - Add `CNAME` for `www` pointing to `@` or configure accordingly.
2. On the VPS:
   - Install Docker & Docker Compose.
   - Copy this project to the server.
   - Create `.env` and run `docker-compose up --build -d`.
3. SSL:
   - Use Certbot to get Let's Encrypt certs; configure nginx to use them (I can provide commands).
   - Or use a reverse proxy like Traefik with automatic certs.

## Security / "Super base protection"
- Use HTTPS with valid certificates.
- Store secrets in environment variables / secret manager.
- Protect backend endpoints using authentication (Supabase JWT or your own sessions).
- Implement rate-limiting (e.g., express-rate-limit) and request validation.
- Monitor logs and limit payload sizes.

## What I DID NOT include
- I did NOT implement actual calls to OpenAI (per your request). The placeholder `/api/chat` echoes input for testing.
- I did NOT include any secret keys.

## Next actions I can perform for you (pick any)
- Implement full OpenAI call in the backend (I will NOT store keys).
- Add Supabase auth flows (signup/login) with example UI code.
- Create GitHub Actions CI to build/push Docker images.
- Produce a cPanel-ready static zip (build output) if you plan to use GoDaddy shared hosting.

