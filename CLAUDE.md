# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An LLM chat application with a React frontend and planned FastAPI backend.

## Project Structure

```
.
├── frontend/           # React chat interface
│   ├── src/
│   │   ├── components/ # Chat UI components
│   │   └── services/   # API service layer
│   └── ...
└── (backend/)         # FastAPI backend (to be implemented)
```

## Frontend Development

### Setup
```bash
cd frontend
npm install
```

### Development Commands
```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Architecture
- **Components**: Modular React components for chat UI
  - `Chat.jsx`: Main container managing state and message flow
  - `ChatMessage.jsx`: Individual message rendering
  - `ChatInput.jsx`: User input handling
- **Services**: API abstraction layer in `src/services/api.js`
  - Currently uses mock responses
  - Structured for easy FastAPI integration
  - Configure backend URL via `.env` file (see `.env.example`)

### Backend Integration
When implementing the FastAPI backend:
1. Expected endpoint: `POST /api/chat`
2. Request body: `{ "message": "user message" }`
3. Response format: `{ "message": "AI response", "timestamp": "ISO string" }`
4. Uncomment actual API calls in `src/services/api.js`
5. Set `VITE_API_URL` environment variable

## Technologies
- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend** (planned): FastAPI, Python
