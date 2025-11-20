# MyCompanio - Vercel Deployment Guide

## Steps to Deploy (Frontend + Backend on Vercel)

1. Open VS Code and sign in to Vercel CLI:
   ```bash
   npm i -g vercel
   vercel login
   ```

2. Clone or open your MyCompanio project in VS Code.

3. Create a `.env` file in project root:
   ```bash
   OPENAI_API_KEY=your_openai_key
   FRONTEND_URL=https://your-vercel-domain.vercel.app
   ```

4. Initialize and deploy:
   ```bash
   vercel
   ```
   Follow the prompts (use defaults).

5. Once deployed, open **Project Settings → Environment Variables** in Vercel dashboard and add:
   - `OPENAI_API_KEY`
   - `FRONTEND_URL`

6. Test backend:
   - Endpoint: `https://your-vercel-domain.vercel.app/api/health`
   - Chat: POST to `https://your-vercel-domain.vercel.app/api/chat` with JSON `{ "message": "Hello" }`

## Notes
- `vercel.json` routes /api to backend and all other routes to frontend.
- Backend uses OpenAI API securely via environment variables.
- Your chatbot frontend should call `/api/chat` instead of direct OpenAI API calls.
- Do not hardcode any API keys in frontend.

## Example VS Code Workflow
1. Open folder in VS Code.
2. Open integrated terminal.
3. Run `npm install` (to install local dependencies if needed).
4. Run `vercel dev` for local test.
5. Once satisfied, run `vercel --prod` for production deployment.
