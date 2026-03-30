# Semantic Scholar API Integration

## Setup

The project uses Semantic Scholar API for academic paper search with the following configuration:

### Rate Limits
- **1 request per second** across all endpoints
- API key must be sent in `x-api-key` header

### Configuration

1. Add your Semantic Scholar API key to `.env`:
```bash
SEMANTIC_SCHOLAR_API_KEY=your_api_key_here
```

2. The API key is automatically loaded via `app/core/config.py`

3. Request throttling is enforced in `app/agents/tools.py`:
   - Global timer tracks last request time
   - Automatically sleeps to maintain 1 req/sec limit
   - Fallback to mock data if API key is missing or rate limit exceeded

### Error Handling

- **403**: Invalid API key → fallback to mock data
- **429**: Rate limit exceeded → fallback to mock data
- **No API key**: Automatically uses fallback mock data

### Implementation Details

**File: `backend/app/agents/tools.py`**
```python
# Global throttle tracking
_last_semantic_time = 0
_semantic_delay = 1.0  # Exactly 1 second

# Enforces delay before each request
time_since_last = time.time() - _last_semantic_time
if time_since_last < _semantic_delay:
    sleep_time = _semantic_delay - time_since_last
    time.sleep(sleep_time)
```

**Headers:**
```python
headers = {
    "x-api-key": settings.SEMANTIC_SCHOLAR_API_KEY
}
```

### Testing

```bash
# Verify API key is loaded
cd backend
python -c "from app.core.config import settings; print(settings.SEMANTIC_SCHOLAR_API_KEY)"
```

### Security

- API key is stored in `.env` (gitignored)
- `.env.example` provides template without real key
- Never commit the actual API key to git
