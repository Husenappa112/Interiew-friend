# M AI Career Platform

## Run locally

```bash
npm install
npm run dev
```

Start the API in a second terminal:

```bash
cd backened
npm install
npm start
```

The API stores accounts in PostgreSQL through Prisma. Before the first run,
create the database named in `backened/.env` and apply the schema:

```bash
cd backened
npx prisma db push
```

The frontend runs on `http://localhost:5173` and the API on `http://localhost:5001`.
Vite forwards `/api` calls to that backend locally, so login and signup use the
same configured API rather than a hard-coded, mismatched port.

Copy `backened/.env.example` to `backened/.env`, then set `GEMINI_API_KEY` to a real key from Google AI Studio. Do not use the placeholder value. The default model is `gemma-3-27b-it`; override it with `GEMMA_MODEL` when needed. Restart the backend after changing `.env`.

## Deploy

`render.yaml` defines both the static frontend and Express backend. Create a Render Blueprint from this repository, then provide `DATABASE_URL`, `JWT_SECRET`, and `GEMINI_API_KEY` as secret environment variables. GitHub Actions verifies both projects on every push and pull request.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
