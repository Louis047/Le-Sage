<div align="center">

# Le Sage

### Research-Backed Startup Idea Engine

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-green)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.11+-blue)](https://www.python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)

*"Don't just generate ideas — validate them with research and connect with the minds that can make them real."*

</div>

---

## Overview

Le Sage is an AI-powered platform that combines deep research automation, novelty-based idea curation, and expert matchmaking into one intelligent system. It helps aspiring entrepreneurs move from "What should I build?" to "Here's what you should build, why it works, and who can help."

### The Problem

Most startup ideas are built on intuition or generic AI outputs, leading to high failure rates and derivative products. Despite vast amounts of untapped innovation sitting in academic databases, founders lack the expertise to navigate technical papers, and researchers lack a path to commercialize their work.

### The Solution

Le Sage uses multi-agent open-source AI models to synthesize deep research into validated startup opportunities. Every idea is backed by evidence from academic papers, market data, and industry reports — not just optimism.

## Core Features

**Research-Backed Idea Generation**  
Provides startup ideas grounded in the latest academic and industry research in your chosen field, powered by Semantic Scholar, arXiv, and real-time web search.

**AI Automation Engine**  
Automates extensive research on market novelty, competition, and feasibility using multi-agent orchestration with CrewAI.

**Novelty Control**  
Users define innovation threshold (1-10 scale) from incremental improvements to breakthrough moonshot ideas, and the AI calibrates accordingly.

**Expert Matchmaking**  
Dual-mode ideation: AI-generated ideas or connections with field-specific human experts backed by research credentials.

## Architecture

### Tech Stack

**Frontend**
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS + shadcn/ui
- Zustand for state management
- Supabase Auth (SSR with middleware)

**Backend**
- FastAPI (Python 3.11+)
- CrewAI for multi-agent orchestration
- Ollama for local LLM inference (Llama 3.2, Mistral 7B)
- SlowAPI for rate limiting

**Data & Services**
- Supabase (PostgreSQL, Authentication, Realtime)
- ChromaDB for vector search
- Semantic Scholar API for academic research
- arXiv API for preprints
- DuckDuckGo Search for web research

**Infrastructure**
- Docker for containerization
- Langfuse for LLM observability
- Redis for distributed rate limiting

### Project Structure

```
Le-Sage/
├── frontend/              # Next.js 15 application
│   ├── src/
│   │   ├── app/          # App Router pages
│   │   ├── components/   # Reusable UI components
│   │   ├── services/     # API service layer
│   │   ├── stores/       # Zustand state management
│   │   ├── lib/          # Supabase client, utilities
│   │   └── types/        # TypeScript definitions
│   └── middleware.ts     # Auth protection
├── backend/              # FastAPI application
│   └── app/
│       ├── api/          # Route handlers
│       ├── agents/       # CrewAI agent definitions + tools
│       ├── services/     # External API integrations
│       ├── models/       # Pydantic schemas
│       └── core/         # Config, rate limiting
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11+
- Ollama (for local LLM)
- Redis (optional, for distributed rate limiting)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Louis047/Le-Sage.git
cd Le-Sage
```

**2. Environment Configuration**

Create a `.env` file in the project root:

```bash
# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Semantic Scholar API (Required)
SEMANTIC_SCHOLAR_API_KEY=your_api_key

# LLM Provider
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434

# Backend API
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

**3. Install Ollama and pull models**

```bash
# Install Ollama from https://ollama.ai
ollama pull llama3.2
```

**4. Start the backend**

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API documentation available at `http://localhost:8000/docs`

**5. Start the frontend**

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`

## Usage

### Generating Research-Backed Ideas

1. **Onboarding**: Select your field of interest and set novelty threshold
2. **Generation**: AI agents research academic papers, patents, and market data
3. **Review**: Each idea includes:
   - Title and description
   - Market potential assessment
   - Feasibility score
   - Novelty rating (matches your threshold)
   - Research citations with links
4. **Save**: Ideas saved to dashboard for future reference

### Multi-Agent Research Flow

```
User Request → Research Agent → Analysis Agent → Synthesis Agent
                     ↓                ↓                ↓
              Web Search    Semantic Scholar    Idea Generation
              DuckDuckGo      arXiv API          with Citations
```

## API Rate Limits

**Semantic Scholar**: 1 request/second (enforced via throttling)  
**Idea Generation**: 5 requests/hour per IP  
**Global API**: 50 requests/hour, 200 requests/day per IP

Rate limiting automatically falls back to in-memory storage if Redis is unavailable.

## Development

### Running Tests

```bash
# Frontend
cd frontend
npm run build

# Backend (tests to be added)
cd backend
pytest
```

### Code Quality

- TypeScript strict mode enabled
- ESLint configured for Next.js
- All builds must pass before deployment

## Deployment

**Frontend**: Cloudflare Pages (recommended) or Vercel  
**Backend**: Render free tier or Docker container on any VPS  
**Database**: Supabase managed PostgreSQL  
**LLM**: Ollama self-hosted or HuggingFace Inference API

Total cost at MVP stage: **$0/month** using free tiers.

## Contributing

This project is part of an active development cycle. Contributions are currently limited to the core team. For feature requests or bug reports, please open an issue.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

Built with 100% open-source tools:
- [Next.js](https://nextjs.org/) - React framework
- [FastAPI](https://fastapi.tiangolo.com/) - Python web framework
- [CrewAI](https://www.crewai.com/) - Multi-agent orchestration
- [Ollama](https://ollama.ai/) - Local LLM runtime
- [Supabase](https://supabase.com/) - Backend-as-a-Service
- [Semantic Scholar](https://www.semanticscholar.org/) - Academic search

## Demo

Demo video and live deployment links to be added upon completion.

---

<div align="center">

**[Website](https://lesage-ai.vercel.app)** · **[Documentation](#)** · **[Report Bug](https://github.com/Louis047/Le-Sage/issues)**

Built by [Louis047](https://github.com/Louis047) and contributors

</div>
