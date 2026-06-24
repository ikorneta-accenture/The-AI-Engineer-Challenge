## Frontend

This is a minimal Next.js App Router frontend for the FastAPI chat backend in
`../api/index.py`.

The app provides a simple chat interface that:

- stores the message history in the browser
- sends user messages to `POST http://localhost:8000/api/chat`
- displays the backend response
- shows a loading state while waiting
- reports errors without crashing the UI

## Prerequisites

- Node.js 20.9 or newer
- The FastAPI backend running on `http://localhost:8000`
- `OPENAI_API_KEY` configured for the backend

## Install Dependencies

From this `frontend` directory, run:

```bash
npm install
```

## Run The Backend

From the repository root, start the FastAPI app:

```bash
uv run uvicorn api.index:app --reload
```

The backend should be available at `http://localhost:8000`.

## Run The Frontend

In a separate terminal, from this `frontend` directory, run:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Useful Scripts

```bash
npm run dev    # start the local Next.js development server
npm run build  # create a production build
npm run start  # serve the production build
npm run lint   # run ESLint
```