# IdeaForge

AI powered platform that combines deep research automation, novelty based idea curation, and expert matchmaking into one intelligent system. It helps aspiring entrepreneurs go from "What should I build?" to "Here is what you should build, why it works, and who can help."

## Tech Stack

### Frontend
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** + **shadcn/ui**
- **Zustand** for state management

### Backend
- **FastAPI** (Python)
- **CrewAI** for multi agent orchestration
- **Ollama** for local LLM inference (open weight models)

### Data and Services
- **Supabase** (PostgreSQL, Auth, Realtime)
- **ChromaDB** for vector search
- **Semantic Scholar API** + **arXiv API** for academic research
- **DuckDuckGo Search** (ddgs) for web research

### Infrastructure
- **Docker** for containerization
- **Cloudflare Pages** (frontend hosting)
- **Render** (backend hosting)
- **Langfuse** for LLM observability

## Project Structure

```
IdeaForge/
├── frontend/          # Next.js 15 application
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   ├── components/# Reusable UI components
│   │   ├── services/  # API service layer (mock > real)
│   │   ├── mocks/     # Mock data for development
│   │   ├── stores/    # Zustand state stores
│   │   ├── lib/       # Utilities
│   │   └── types/     # TypeScript type definitions
│   └── public/        # Static assets
├── backend/           # FastAPI application
│   └── app/
│       ├── api/       # Route handlers
│       ├── agents/    # CrewAI agent definitions
│       ├── services/  # External API integrations
│       ├── models/    # Pydantic models
│       └── core/      # Config and utilities
└── docker-compose.yml
```

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker (optional)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API docs available at [http://localhost:8000/docs](http://localhost:8000/docs).

### Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```bash
cp .env.example .env
```

See `.env.example` for the full list of config options.

## Development Notes

- The frontend uses a **service layer pattern**. All API calls go through files in `src/services/`. During early development these return mock data. They will be swapped for real API calls once the backend is ready.
- Mock data lives in `src/mocks/` and can be modified for testing.
- Auth is handled by Supabase. The Supabase client is configured in `src/lib/supabase.ts`.

## License

MIT
