# Le Sage AI - Environment Configuration Guide

## Required Environment Variables

Create a `.env` file in the project root with the following variables:

### 1. Supabase Authentication (Required)

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

**Where to get these:**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project or select existing
3. Go to Settings → API
4. Copy the Project URL and anon/public key

### 2. Semantic Scholar API (Required)

```bash
SEMANTIC_SCHOLAR_API_KEY=your_api_key
```

**Where to get this:**
1. Visit [Semantic Scholar API](https://www.semanticscholar.org/product/api)
2. Sign up and request an API key
3. Copy the key to your .env file

**Important Rate Limits:**
- 1 request per second across all endpoints
- API key sent via `x-api-key` header
- Automatic throttling enforced in code

### 3. LLM Provider (Optional)

```bash
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
HF_TOKEN=optional_huggingface_token
```

**Options:**
- `ollama` (default): Run local models via Ollama
- `huggingface`: Use HuggingFace Inference API (requires HF_TOKEN)

### 4. Backend API URL (Required for Frontend)

```bash
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Change to your production backend URL when deploying.

## Quick Start

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your credentials in `.env`

3. **Never commit `.env` to git** (already in .gitignore)

## Verification

### Check Backend Configuration
```bash
cd backend
python -c "from app.core.config import settings; print(f'Semantic Scholar: {bool(settings.SEMANTIC_SCHOLAR_API_KEY)}')"
```

### Check Frontend Configuration
```bash
# Start frontend dev server
cd frontend
npm run dev

# Should connect to backend at NEXT_PUBLIC_API_URL
```

## Security Notes

- ✅ `.env` is in `.gitignore`
- ✅ Use `.env.example` as template
- ✅ API keys loaded via Pydantic Settings
- ✅ Never hardcode secrets in code
- ✅ Rotate API keys if exposed

## Troubleshooting

### API Key Not Loading
- Ensure `.env` is in project root
- Check file encoding (UTF-8)
- Restart dev servers after changing .env

### Rate Limit Errors (429)
- Semantic Scholar: Wait 1 second between requests (automatic)
- Backend API: Default 5 requests/hour for idea generation
- Adjust limits in `backend/app/core/rate_limiter.py`

### CORS Errors
- Check `NEXT_PUBLIC_API_URL` matches backend URL
- Ensure backend includes frontend origin in CORS middleware
