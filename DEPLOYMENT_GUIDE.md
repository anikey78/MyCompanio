# MyCompanio - Deployment Guide (prepared for mycompanio.in)

## What I prepared for you (in this zip)
- Project files (copied from your upload)
- Dockerfile (builds and serves the app via nginx)
- nginx.conf (simple SPA configuration)
- docker-compose.yml (single-service setup)
- This deployment guide

## Quick review notes (automated scan)
- Top-level folders: {'dirs': ['src'], 'files': ['vite.config.ts', 'index.html', 'package.json', 'README.md']}
- package.json found at: /mnt/data/mycompanio_extracted/package.json
- README found: Yes
- I attempted an automated build step in Dockerfile using `npm run build` if package.json exists.
- If your project is a static site (React/Vite/Next build output in `build` or `dist`), Dockerfile will serve it.
- If your app requires a Node backend, you'll need to supply a `backend` folder or update the docker-compose file.

## Suggested immediate actions (I can do these steps with your permission)
1. Verify `package.json` scripts:
   - Ensure there is a `build` script (e.g., `react-scripts build` or equivalent).
   - Ensure dependencies are listed.
2. If you have environment variables (API keys, DB strings), create a `.env.production` and never commit secrets.
3. Test locally:
   - Build: `docker build -t mycompanio .`
   - Run: `docker run -p 80:80 mycompanio`
   - Or using docker-compose: `docker-compose up --build`
4. Deploy options:
   - **Vercel/Netlify**: Easiest for static frontends. Connect GitHub repo and set build command (npm run build).
   - **Docker on VPS (DigitalOcean/AWS Lightsail)**: Use provided Dockerfile/docker-compose. Point GoDaddy DNS A record to droplet IP.
   - **GoDaddy Hosting (cPanel)**: If using shared hosting, upload the `build` folder contents to `public_html`. Use cPanel File Manager or FTP.
5. Domain & SSL (mycompanio.in):
   - In GoDaddy DNS manager, set `A` record for `@` to server IP (or use CNAME to hosting provider if they give it).
   - For SSL, use Let's Encrypt via Certbot on your server, or use hosting provider's built-in SSL.
6. Chatbot / Backend:
   - If your chatbot depends on an API key (OpenAI or other), do NOT include keys in repo.
   - Host server-side calls in a small backend to keep keys secret. Add an `/api/chat` endpoint proxied by nginx.

## Files I read (snippets)

### package.json scripts:
```
{
  "dev": "vite",
  "build": "vite build"
}
```

### Top dependencies (partial):
```
{
  "@radix-ui/react-accordion": "^1.2.3",
  "@radix-ui/react-alert-dialog": "^1.1.6",
  "@radix-ui/react-aspect-ratio": "^1.1.2",
  "@radix-ui/react-avatar": "^1.1.3",
  "@radix-ui/react-checkbox": "^1.1.4",
  "@radix-ui/react-collapsible": "^1.1.3",
  "@radix-ui/react-context-menu": "^2.2.6",
  "@radix-ui/react-dialog": "^1.1.6",
  "@radix-ui/react-dropdown-menu": "^2.1.6",
  "@radix-ui/react-hover-card": "^1.1.6"
}
```

### README (first 800 chars):

```

  # Attractive Website with Chatbot

  This is a code bundle for Attractive Website with Chatbot. The original project is available at https://www.figma.com/design/3qhvYfr9L9gfMeBJtGdFL7/Attractive-Website-with-Chatbot.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
```


## Next steps I recommend I can do for you now (choose any and I'll do them)
- Create a production `.env.example` and `.gitignore`.
- Add a small Express backend template (`backend/`) that proxies chatbot requests to keep API keys secret.
- Prepare a GitHub Actions workflow for CI/CD to build and deploy a Docker image.
- Prepare step-by-step DNS and GoDaddy instructions with exact UI clicks (I can list them).
- Create a ready-to-upload zip specifically for GoDaddy cPanel (only the build folder).

## If you want me to package a GoDaddy cPanel-ready zip now:
- I can run `npm run build` inside the project here and produce `build/` then create `mycompanio_cpanel.zip`.
- Note: This environment cannot access the internet to download npm packages, so I cannot run `npm install` here.
  You should run `npm install` locally or on a build server (or I can provide commands).

## Important limitations
- I cannot deploy to external hosts or change DNS records from here.
- I cannot run `npm install` because this environment has no network access to download packages.
- I prepared Dockerfile/nginx and docker-compose so you can deploy on any Docker-capable host without further changes.

## Where to download the prepared zip
- [Download the deployment-ready zip file](sandbox:/mnt/data/mycompanio_deploy_ready.zip)



## Added backend scaffold and Supabase/Auth skeleton.
