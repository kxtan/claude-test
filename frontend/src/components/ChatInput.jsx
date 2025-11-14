import React, { useState } from 'react';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/10 border-t border-white/20 p-6">
      <div className="flex gap-3 items-end">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={disabled}
            className="w-full resize-none rounded-2xl backdrop-blur-md bg-white/90 border-2 border-white/50 px-5 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl"
            rows={1}
            style={{
              minHeight: '56px',
              maxHeight: '120px',
            }}
          />
          <div className="absolute right-3 bottom-3 text-xs text-gray-600 font-medium">
            {input.length > 0 && `${input.length} chars`}
          </div>
        </div>
        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="group relative px-7 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-xl transform hover:scale-105 active:scale-95"
        >
          <span className="flex items-center gap-2">
            <span>Send</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
