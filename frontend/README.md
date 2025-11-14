# LLM Chat Frontend

A modern, professional chat interface for an LLM application built with React and Tailwind CSS.

## Features

- Clean and modern chat UI
- Real-time message updates
- Loading states and animations
- Responsive design
- Ready for FastAPI backend integration

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Chat.jsx          # Main chat container
│   ├── ChatMessage.jsx   # Individual message component
│   └── ChatInput.jsx     # Message input component
├── services/
│   └── api.js           # API service layer (currently using mocks)
├── App.jsx              # Root component
└── main.jsx             # Entry point
```

## Backend Integration

Currently, the app uses mock responses. To integrate with a FastAPI backend:

1. Create a `.env` file based on `.env.example`
2. Set `VITE_API_URL` to your FastAPI backend URL
3. Uncomment the actual API calls in `src/services/api.js`
4. The expected backend endpoint is `POST /api/chat` with JSON body `{ "message": "user message" }`

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- ES6+
