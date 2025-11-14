// API Service for communicating with FastAPI backend
// Currently using mock responses, will be replaced with actual API calls

const MOCK_RESPONSES = [
  "That's an interesting question! Let me help you with that. Based on my understanding, there are several approaches we could take.",
  "I see what you're asking. Here's what I think: This is a complex topic that requires careful consideration of multiple factors.",
  "Great question! The answer depends on several factors, but generally speaking, the best approach would be to...",
  "I'd be happy to help with that. From my analysis, it appears that the optimal solution involves considering both technical and practical aspects.",
  "That's a thoughtful inquiry. Let me break this down for you: First, we need to understand the core principles involved, then we can explore the implementation details.",
];

// Simulates network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Send a message to the LLM backend
 * @param {string} message - The user's message
 * @returns {Promise<{message: string}>} - The AI's response
 */
export const sendMessage = async (message) => {
  // TODO: Replace with actual FastAPI endpoint
  // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  // const response = await fetch(`${API_URL}/api/chat`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ message }),
  // });
  //
  // if (!response.ok) {
  //   throw new Error('Failed to send message');
  // }
  //
  // return await response.json();

  // Mock implementation
  await delay(1000 + Math.random() * 1500); // Simulate network delay

  const randomResponse = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];

  return {
    message: randomResponse,
    timestamp: new Date().toISOString(),
  };
};

/**
 * Get chat history (for future implementation)
 * @returns {Promise<Array>} - Array of previous messages
 */
export const getChatHistory = async () => {
  // TODO: Implement when backend is ready
  // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  // const response = await fetch(`${API_URL}/api/chat/history`);
  // return await response.json();

  return [];
};

/**
 * Clear chat history (for future implementation)
 * @returns {Promise<void>}
 */
export const clearChatHistory = async () => {
  // TODO: Implement when backend is ready
  // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  // await fetch(`${API_URL}/api/chat/history`, { method: 'DELETE' });
};
